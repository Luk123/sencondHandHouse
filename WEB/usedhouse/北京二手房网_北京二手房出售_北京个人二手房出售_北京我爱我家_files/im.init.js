/**
 * Created by luohua on 17-5-25.
 */
var curPage = 1;
var conn = {};
conn = new WebIM.connection({
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
    https: typeof WebIM.config.https === 'boolean' ? WebIM.config.https : location.protocol === 'https:',
    url: WebIM.config.xmppURL,
    isAutoLogin: true,
    heartBeatWait: WebIM.config.heartBeatWait,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    apiUrl: WebIM.config.apiURL
});

// listern，添加回调函数
conn.listen({
    onOpened: function (message) {          //连接成功回调，连接成功后才可以发送消息
        //如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
        // 手动上线指的是调用conn.setPresence(); 在本例中，conn初始化时已将isAutoLogin设置为true
        // 所以无需调用conn.setPresence();
        //console.log('open');
        console.log(message)
    },
    onTextMessage: function (message) {
        // 在此接收和处理消息，根据message.type区分消息来源，私聊或群组或聊天室
        message.messageType = 0;
        //message.data = WebIM.utils.parseEmoji(message.data);
        onMessage(message);
    },  //收到文本消息
    onPictureMessage: function (message) {
        message.messageType = 4;
        message.data = message.url;
        onMessage(message);
    },
    onAudioMessage: function (message) {
        message.messageType = 3;
        message.data = message.url;
        onMessage(message);
        /*
        var options = { url: message.url };
        options.onFileDownloadComplete = function ( response ) {
            //音频下载成功，需要将response转换成blob，使用objectURL作为audio标签的src即可播放。
            var objectURL = WebIM.utils.parseDownloadResponse.call(conn, response);
            message.objectUrl = objectURL;
        };

        options.onFileDownloadError = function () {
            //音频下载失败
        };

        //通知服务器将音频转为mp3
        options.headers = {
            'Accept': 'audio/mp3'
        };

        WebIM.utils.download.call(conn, options);
        */

    },
    onOnline: function () {
         //console.log('33333333');
    },                  //本机网络连接成功
    onOffline: function () {
        //console.log('------');
    },                 //本机网络掉线
    onError: function (message) {
        //console.log(message);
        //console.log('2');
    }
});

function onMessage(message) {
    //console.log(message);
    var isViewed = 0;
    var toReceiver = $("#toReceiver").val();

    var lastData = $("#lastData").val();
    var curTime = (new Date()).getTime();
    var intervalTime = curTime - lastData;
    var msgData = message.data;
    if(undefined != message.ext.subType) {
        message.messageType = message.ext.subType;
    }
//console.log(message.ext.txt_message_type);
    //5iwork, ext.txt_message_type=3表示房源卡片
    if(3 == message.ext.txt_message_type) {
        message.messageType = 1;
        msgData = JSON.stringify(message.ext.HOUSE_INFO);
    }

    //如果当前聊天窗口打开了, 并且没有点击过加载更多,则需要把消息渲染出来
    //from为经纪人,是经纪人给客户发送的消息
    //to为经纪人,是客户从别的平台给经纪人发送的消息
    if (toReceiver == message.from || toReceiver == message.to){

        isViewed = 1;
        //如果是小区动态, 下方有查看更多关注小区新上房源的提醒,要先拿掉,不然页面会乱掉
        //if(message.messageType == 5) {
        //    $('.more-xq').remove();
        //}
        if (intervalTime > 120000){
            var strTime = formatTime(curTime);
            var appendData = {"type":"time","toReceiver":"messageBox_"+toReceiver,"strTime":strTime};
            appendMsg(appendData);
        }

        $('#lastData').val(curTime);
        var appendData = {};
        switch (message.messageType){
            case 0:
                //经纪人发的消息
                if(message.from == toReceiver) {
                    appendData = {"type":"jjr","subType":"txt","toReceiver":"messageBox_"+toReceiver,"msgs":message.data,"userPic":brokerPic,"scrollTop":true,"fromType":"jjr"};
                } else {
                    appendData = {"type":"kh","subType":"txt","toReceiver":"messageBox_"+toReceiver,"msgs":message.data,"userPic":userPic,"scrollTop":true,"fromType":"kh"};
                }
                break;
            case 1:
                if(message.from == toReceiver) {
                    appendData = {
                        "type": "jjr",
                        "subType": "card",
                        "toReceiver": "messageBox_" + toReceiver,
                        "houseInfo": msgData,
                        "userPic": brokerPic,
                        "scrollTop": true,
                        "fromType": "jjr"
                    };
                } else {
                    appendData = {
                        "type": "kh",
                        "subType": "card",
                        "toReceiver": "messageBox_" + toReceiver,
                        "houseInfo": msgData,
                        "userPic": userPic,
                        "scrollTop": true,
                        "fromType": "kh"
                    };
                }
                break;
            case 3:
                //经纪人发的语音
                if(message.from == toReceiver) {
                    appendData = {"type":"jjr","subType":"audio","toReceiver":"messageBox_"+toReceiver,"msgs":message.data,"userPic":brokerPic,"scrollTop":true,"fromType":"jjr"};
                } else {
                    appendData = {"type":"kh","subType":"audio","toReceiver":"messageBox_"+toReceiver,"msgs":message.data,"userPic":userPic,"scrollTop":true,"fromType":"kh"};
                }
                break;
            case 4:
                if(message.from == toReceiver) {
                    appendData = {"type":"jjr","subType":"image","toReceiver":"messageBox_"+toReceiver,"image":message.url,"userPic":brokerPic,"scrollTop":true,"fromType":"jjr"};
                } else {
                    appendData = {"type":"kh","subType":"image","toReceiver":"messageBox_"+toReceiver,"image":message.url,"userPic":userPic,"scrollTop":true,"fromType":"kh"};
                }
                break;
            case 5:
                appendData = {
                "type": "xqdt",
                "subType": "txt",
                "toReceiver": "messageBox_" + toReceiver,
                "msgs": message.data
                };
                break;
            case 6:
                appendData = {
                    "type": "fydt",
                    "subType": "txt",
                    "toReceiver": "messageBox_" + toReceiver,
                    "msgs": message.data
                };
                break;
            case 7:
                appendData = {
                    "type": "znxf",
                    "subType": "txt",
                    "toReceiver": "messageBox_" + toReceiver,
                    "msgs": message.data
                };
                break;
            default:
        }
        appendMsg(appendData);
        //如果是小区动态,渲染出查看更多关注小区新上房源
        if(message.messageType == 5) {
            appendData = {
                "type": "xqdt",
                "subType": "link",
                "toReceiver": "messageBox_" + toReceiver,
                "msgs": "",
                "userPic": "",
                "scrollTop":true,
                "fromType":"jjr",
                "id":message.id
            };
            appendMsg(appendData);
        }
        if( message.from == toReceiver && curPage != 1) {
            var messageBoxInfo = '';
            if(message.messageType == 0) {
                messageBoxInfo = replace_em(message.data);
            } else if(message.messageType == 1) {
                messageBoxInfo = message.data;
            } else if(message.messageType == 3) {
                messageBoxInfo = '收到语音,请在手机上查看';
            } else if(message.messageType == 4) {
                messageBoxInfo = '[图片]';
            }
            if('' != messageBoxInfo) {
                var messageBox = '<div class="news-box" style="text-align: center; margin-bottom: 0px" onclick="scrollButtom()">'+ messageBoxInfo +'</div>';
                $("#messageBox_"+toReceiver).append(messageBox);
                var timeout=setTimeout(function () {
                    $(".news-box").fadeOut(1000);
                }, 2000);
            }
        }
    }

    //不管是不是当前聊天窗口,都得更改左侧的聊天栏
    switch (parseInt(message.messageType)) {
        case 0:
        case 1:
        case 3:
        case 4:
            appendListAgent(message,curTime);
            break;
        case 5:
        case 6:
        case 7:
            appendListAdmin(message,curTime,isViewed);
            break;
    }
    $('.w-login').remove();
    if(message.from.indexOf('uid') >= 0) {
        conversation_type = 1;
    } else {
        conversation_type = 2;
    }
    var sendData = {"data":msgData,"message_type":message.messageType,"conversation_type":conversation_type,'id':message.id,'from':message.from,'to':message.to,'is_viewed':isViewed,"company_code":cityId};
    sendMsg(sendData);
    calculateUnreadNum();
}
//var username = username;
// open，登录
if(contactUserId > 0) {
    var options = {
        apiUrl: WebIM.config.apiURL,
        user: contactUserId+'uid', //账户
        pwd: contactUserId, //账户密码
        appKey: WebIM.config.appkey
    };
    //console.log(options);
    conn.open(options);
    //console.log(conn);
}

// 私聊发送文本消息，发送表情同发送文本消息，只是会在对方客户端将表情文本进行解析成图片
function sendPrivateText(s) {
    var messageTypesss = s ? s : 0;
    var id = conn.getUniqueId();
    var msg = new WebIM.message('txt', id);
    var toReceiver = $("#toReceiver").val();
    var lastData = $("#lastData").val();
    var curTime = (new Date()).getTime();
    var intervalTime = curTime - lastData;
    if(messageTypesss == 0){
        var msgs = $.trim($("#chat_"+toReceiver).val());
        if (msgs == ''){
            $('.msgnull').show();
            setTimeout(" $('.msgnull').hide();",2000);
            return;
        }
        $("#sendMsg").html("");
        /*var ext = {
            "persion_info": JSON.stringify(textext),
            "broker_info": JSON.stringify(broker_info)
        };*/
        var ext = {
            "persion_info": textext,
            "broker_info": broker_info
        };
        //console.log(ext);
    }else {
        var msgs = '[房源] ' + imHouse.area + ' ' + imHouse.price;
        var ext = {
            //"persion_info": JSON.stringify(textext),
            //"broker_info": JSON.stringify(broker_info),
            "persion_info": textext,
            "broker_info": broker_info,
            "HOUSE_INFO": imHouse,
            "txt_message_type": 3
        };
        //console.log(ext);
    }
    $('#lastData').val(curTime);

    //console.log($("#chat_"+toReceiver).val().replaceAll('\n','<br/>'));
    //console.log(1);
    if  (intervalTime < 1000){
        //console.log(2);
        $('.msgfast').show();
        setTimeout(" $('.msgfast').hide();",2000);
    }else {
        msg.set({
            msg: msgs,             // 消息内容
            to: toReceiver,     // 接收消息对象
            //to: '306uid',     // 接收消息对象
            type: 'txt',
            ext: ext,
            roomType: false,
            success: function (id, serverMsgId) {
                //console.log('success');
                if (intervalTime > 120000) {
                    var strTime = formatTime(curTime);
                    var appendData = {"type":"time","toReceiver":"messageBox_"+toReceiver,"strTime":strTime};
                    appendMsg(appendData);
                }
                var message = {"data":msgs, "from":toReceiver, "to":contactUserId+'uid',"messageType":0};
                appendListAgent(message,curTime);
                if (messageTypesss == 1){
                    appendData = {
                        "type":'kh',
                        "subType":"card",
                        "toReceiver":"messageBox_"+toReceiver,
                        "houseInfo":JSON.stringify(imHouse),
                        "userPic":userPic,
                        "scrollTop":true
                    };
                    //console.log(appendData);
                    appendMsg(appendData);
                    sendData = {
                        "data": JSON.stringify(imHouse),
                        "message_type": messageTypesss,
                        "conversation_type": 1,
                        "ext": ext,
                        "from": options.user,
                        'to': toReceiver,
                        'id':serverMsgId,
                        "company_code":cityId
                    };
                }else {
                    msgs = msgs.replace(new RegExp('\n','g'),'<br/>');
                    var appendData = {"type":"kh","subType":"txt","toReceiver":"messageBox_"+toReceiver,"msgs":msgs,"userPic":userPic,"scrollTop":true};
                    appendMsg(appendData);
                    sendData = {
                        "data": msgs,
                        "message_type": messageTypesss,
                        "conversation_type": 1,
                        "ext": ext,
                        "from": options.user,
                        'to': toReceiver,
                        'id':serverMsgId,
                        "company_code":cityId
                    };
                }
                sendMsg(sendData);
            },
            fail: function(e) {
                console.log(e);
            }
        });
        msg.body.chatType = 'singleChat';
        conn.send(msg.body);
    }
};



// 私聊发送图片消息
function sendPrivateImg() {
    var id = conn.getUniqueId();
    var toReceiver = $("#toReceiver").val();
    var msg = new WebIM.message('img', id);
    var input = document.getElementById('image_'+toReceiver);   // 选择图片的input
    var file = WebIM.utils.getFileUrl(input);                   // 将图片转化为二进制文件
    var curTime = (new Date()).getTime();
    var allowType = {
        'jpg': true,
        'gif': true,
        'png': true,
        'bmp': true
    };
    if (file.filetype.toLowerCase() in allowType) {
        var option = {
            apiUrl: WebIM.config.apiURL,
            file: file,
            to: toReceiver,
            ext: {
                //"persion_info": JSON.stringify(textext),
                //"broker_info": JSON.stringify(broker_info)
                "persion_info": textext,
                "broker_info": broker_info
            },
            roomType: false,
            chatType: 'singleChat',
            onFileUploadError: function () {
            },
            onFileUploadComplete: function () {
                var appendData = {"type":"kh","subType":"image","toReceiver":"messageBox_"+toReceiver,"image":msg.body.body.url,"userPic":userPic,"scrollTop":true};
                appendMsg(appendData);
                var message = {"data":msg, "from":toReceiver, "to":contactUserId+'uid',"messageType":4};
                appendListAgent(message,curTime);
            },
            success: function () {
                sendData = {
                    "data": msg.body.body.url,
                    "message_type": 4,
                    "conversation_type": 1,
                    "from": options.user,
                    'to': toReceiver,
                    "company_code":cityId
                };
                sendMsg(sendData);
            },
            // flashUpload: WebIM.flashUpload               // 意义待查
        };
        msg.set(option);
        conn.send(msg.body);
    }
};

// 私聊发送房源卡片, 直接点开聊天窗口,主动发送消息
function sendPrivateCard(agencyID) {
    console.log(4444444444444);
    if(contactUserId == 0) {;
        window.location.href = imloginurl;
        return false;
    }
    if(!isActived){
        alert("你已经被禁言");
    }

    if(imHouse.area == undefined) {
        addBroker(agencyID);
        return false;
    }
    $('.w-login').remove();
    var data = {"agencyID":agencyID,'cityID':cityId};
    var url = '/im/ajaxbroker';
    $.ajax({
        type:"POST",
        url:url,
        data:data,
        success:function(data){

            var data = JSON.parse(data);
            data['mobile'] = undefined != data['fzzphone']?data['fzzphone']:data['mobile'];
            data['bname'] = data['bname'].replace(/\d+/,'');
            $(".xList").removeClass("hide");
            $(".mo p").removeClass("zhankai");
            $(".mo a").removeClass("hide");

            broker_info = {
                "userhid": data['hx_id'],
                "nickname": data['bname'],
                "imageurl": data['brokerimg'],
                "phonenum": data['mobile']
            };


            var msgStr = '[房源] '+imHouse.area+' '+imHouse.price;
            if($('#'+data['brokerid']+'id').length == 0) {
                var str = '<li id="' + data['hx_id'] + '" receiveID="' + data['brokerid'] + '" status="' + data['status'] + '" mobile="' + data['mobile'] + '" class="cur"> <div class="head-icons"><img src="' + data['brokerimg'] + '" onerror="defaultBrokerError(this);"></div> <div class="head-cons"> <p><strong id="name_' + data['hx_id'] + '">' + data['bname'] + ' </strong><span id="time_' + data['hx_id'] + '"></span></p> <p id="msg_' + data['hx_id'] + '">' + msgStr + '</p> </div> </li>';
                $('#im_list').prepend(str);
                brokerPic = data['brokerimg'];
                appendContent('broker', data['hx_id'], data['bname'],data['status'],data['mobile']);
                $('#messageBox_' + data['hx_id']).html('');
                /*appendData = {
                 "type":'kh',
                 "subType":"card",
                 "toReceiver":"messageBox_"+data['hx_id'],
                 "houseInfo":JSON.stringify(imHouse),
                 "userPic":userPic,
                 "scrollTop":true
                 };
                 appendMsg(appendData, 'prepend');*/
                $(".two_cons").removeClass("hide").addClass("show");

            } else if($('#toReceiver').val() != data['brokerid']+'id'){
                openChat($('[receiveID='+data['brokerid']+']'));
            }
            $('[receiveID='+data['brokerid']+']').attr('status',data['status']);
            $("#toReceiver").val(data['brokerid']+'id');
            sendPrivateText(1);
        },
        error:function(data){
        }
    });
};
