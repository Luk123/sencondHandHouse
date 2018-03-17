/**
 * Created by qianhui on 2017/10/10.
 */
if (typeof console == "undefined") {    this.console = { log: function (msg) {  } };}
// 如果浏览器不支持websocket，会使用这个flash自动模拟websocket协议，此过程对开发者透明
WEB_SOCKET_SWF_LOCATION = RESOURCES+"/pc/im/swf/WebSocketMain.swf";
// 开启flash的websocket debug
WEB_SOCKET_DEBUG = true;
var ws, name, client_list={};

if(contactUserId > 0) {
    connect();
}

// 连接服务端
function connect() {
    // 创建websocket
    ws = new WebSocket(wsWS + "://"+wsIP);
    // 当socket连接打开时，输入用户名
    ws.onopen = onopen;
    // 当有消息时根据消息类型显示不同信息
    ws.onmessage = onmessage;
    ws.onclose = function() {
        console.log("连接关闭，定时重连");
        connect();
    };
    ws.onerror = function() {
        console.log("出现错误");
    };
}

// 连接建立时发送登录信息
function onopen()
{
    var token = $.cookie('wiwj_token_ticket');
    var login_data = '{"type":"login","token":"'+token+'"}';
    ws.send(login_data);
}

// 服务端发来消息时
function onmessage(e)
{
    var message = eval("("+e.data+")");
    var isViewed = 0;
    var toReceiver = $("#toReceiver").val();

    var lastData = $("#lastData").val();
    var curTime = (new Date()).getTime();
    var intervalTime = curTime - lastData;

    message.messageType = parseInt(message.messageType);
    //如果当前聊天窗口打开了, 并且没有点击过加载更多,则需要把消息渲染出来
    if (toReceiver == message.from){
//console.log(1);
        isViewed = 1;
        //如果是小区动态, 下方有查看更多关注小区新上房源的提醒,要先拿掉,不然页面会乱掉
        if(message.messageType == MESSAGE_TYPE_COMMUNITY_NEWS) {
            $('.more-xq').remove();
        }
        if (intervalTime > 120000){
            var strTime = formatTime(curTime);
            var appendData = {"type":"time","toReceiver":"messageBox_"+toReceiver,"strTime":strTime};
            appendMsg(appendData);
        }

        $('#lastData').val(curTime);
        var appendData = {};
        switch (message.messageType){
            case MESSAGE_TYPE_COMMUNITY_NEWS:
                appendData = {
                    "type": "xqdt",
                    "subType": "txt",
                    "toReceiver": "messageBox_" + toReceiver,
                    "msgs": JSON.stringify(message.data)
                };
                break;
            case MESSAGE_TYPE_HOUSE_NEWS:
                appendData = {
                    "type": "fydt",
                    "subType": "txt",
                    "toReceiver": "messageBox_" + toReceiver,
                    "msgs": JSON.stringify(message.data)
                };
                break;
            case MESSAGE_TYPE_SMART_CARD:
                appendData = {
                    "type": "znxf",
                    "subType": "txt",
                    "toReceiver": "messageBox_" + toReceiver,
                    "msgs": JSON.stringify(message.data)
                };
                break;
            default:
        }
        appendMsg(appendData);
        //如果是小区动态,渲染出查看更多关注小区新上房源
        if(message.messageType == MESSAGE_TYPE_COMMUNITY_NEWS) {
            appendData = {
                "type": "xqdt",
                "subType": "link",
                "toReceiver": "messageBox_" + toReceiver,
                "msgs": "",
                "userPic": "",
                "scrollTop":true,
                "fromType":"jjr"
            };
            appendMsg(appendData);
        }
    }

    //不管是不是当前聊天窗口,都得更改左侧的聊天栏
    appendListAdmin(message,curTime,isViewed);
    if(!isNaN(message.messageType)) {
        $('.w-login').remove();
    }
    calculateUnreadNum();
}
