$(function(){
    //最小化
    $(".mo a").click(function(event){
        $(".xList").addClass("hide");//隐藏列表
       // $(this).addClass("zhankai");//隐藏最小化按钮
         $(this).addClass("hide");
         $(".mo p").addClass("zhankai");
         $(".two_cons").removeClass("show").addClass("hide");
        $(".w-login").removeClass("show").addClass("hide");
        event.stopPropagation();

    });

	//
	$(".mo").click(function(){
		$(".mo a").removeClass("hide");
        $(".xList").removeClass("hide");
        $(".mo p").removeClass("zhankai");
        //$(".mo p").css("width","80%");
        $('.w-login').removeClass("hide").addClass("show");
	});
	///
//	if($(".two_cons").is(":visible")){
//		$(".mo a").removeClass("hide");
//	};
	 
//	 $(".duanxin").click(function(){
//	 	$(".mo a").removeClass("hide");
//	 });
	///
	$(document).on( "click" , ".xList li" ,function(){
	    openChat(this);
	})
	$(".closed a").click(function(){
		$(".two_cons").removeClass("show").addClass("hide");
		$(".xList li").removeClass("cur");
        $('#toReceiver').val("");
        $('#lastData').val("");
	})
	$(document).on( "click" , ".aBtn" ,function(){
        var sendType = $(this).attr('sendType');
		clientSendMessage(sendType);
	});
    $(document).on("click", ".avator-btn-fake", function () {
        var toReceiver = $("#toReceiver").val();
        $("#image_" + toReceiver).click();
        $("#btn_" + toReceiver).attr('sendType', 'img');
        $("#chatImg_" + toReceiver).addClass('block').removeClass('hide');
        $("#chat_" + toReceiver).addClass('hide').removeClass('block');
        $('#chatImg_' + toReceiver).click(function(){
            if($(this).html() == '') {
                $("#chatImg_" + toReceiver).addClass('hide').removeClass('block');
                $("#chat_" + toReceiver).addClass('block').removeClass('hide');
            }
        });
    });
    calculateUnreadNum();

    $(document).on("keydown", ".textwbq", function(e){
        if(e.ctrlKey && e.keyCode == 13) {
            var textareaContent = $(this).val();
            var newContent = textareaContent + "\n";
            $(this).val(newContent);
        } else if(e.keyCode == 13) {
            e.preventDefault();
            var sendType = $('.aBtn').attr('sendType');
            clientSendMessage(sendType);
            $(this).val("");
        }
    });

    $(document).on("keydown", ".divwbq", function(e){
        if(e.keyCode == 13) {
            e.preventDefault();
            var sendType = $('.aBtn').attr('sendType');
            clientSendMessage(sendType);
            $(this).val("");
        } else if(e.keyCode == 8) {
            $(this).html('');
        }
    });
});

function appendContent(type,id,name,status,phone) {
    //console.log(id);
	if (type == 'broker'){
        /*if(status == 'online'){
            status = '(在线)';
        }else{
            status = '(离线)';
        }*/
        status = '';
        if($('#'+id).attr('leave') == 0) {
            status = '(已离职)';
            phone = '';
        }
        name = name.replace(/\d+/,'');
		var str = '<li id="content_'+id+'"> <div class="f-menus"><span class="j-name">'+name+'<i>'+status+'</i></span><span class="j-tel">'+phone+'</span></div> <div class="listCon-xx dhBox" id="messageBox_'+id+'"> </div> <div class="textAre"><div class="bqBox"><a class="imgIcon avator-btn-fake"  herf="javascript:void(0)"><input type="file" id="image_'+id+'" onchange="preImg(this.id);"></a><a class="face-icon"></a></div><textarea class="wbq textwbq" rows="3" id="chat_'+id+'" maxlength="3000" autofocus></textarea><div style="overflow: auto" tabindex="1" class="wbq divwbq hide" rows="3" id="chatImg_'+id+'"></div> <div class="fsBox">  <span class="aBtn" id="btn_'+id+'" sendType="text">发送</span> </div> </div> </li>';

	} else if(type == "xiaoqudongtai") {
        var str = '<li id="content_xiaoqudongtai"><div class="f-menus"><span class="j-name">小区动态</span></div><div class="listCon-xx fy-height dhBox" id="messageBox_'+type+'"></div>';
    } else if(type == 'fangyuandongtai') {
        var str = '<li id="content_fangyuandongtai"><div class="f-menus"><span class="j-name">房源动态</span></div><div class="listCon-xx fy-height dhBox" id="messageBox_'+type+'"></div>';
    } else if(type == 'zhinengxuanfang') {
        var str = '<li id="content_zhinengxuanfang"><div class="f-menus"><span class="j-name">选房卡</span></div><div class="listCon-xx zn-height dhBox" id="messageBox_'+type+'"></div>';
    }
    $("#t_Mains").append(str);

    $(".dhBox").scroll(function() {
        var h = $(this).outerHeight();
        var sh = $(this)[0].scrollHeight;
        var st =$(this)[0].scrollTop;
        if(h+st>=sh){
            var toReceiver = $("#toReceiver").val();
            curPage = 1;
        }
    });
    $("#content_"+id).show().siblings().hide();
    imgDisable();//输入文字后，图片入口置灰，不能点击(有文字的时候上传图片不可用)
}

//消息持久化
function sendMsg(data) {
	var url = '/im/ajaxmessage';
	$.ajax({
		type:"POST",
		url:url,
		data:data,
        dataType:'json',
		success:function(data){
		    //console.log(data);
		    var online = data.data.res.status;
            //console.log(online);
            var agentId = data.data.res.id;
            //console.log(agentId);
            $('#'+agentId+'id').attr('status',online);
            /*if(online == 'online') {
                var str = '(在线)';
            } else {
                var str = '(离线)';
            }
            $('#content_'+agentId+'id span i').text(str);*/
		},
		error:function(){
		    //console.log('failed');
		}
	});
}

//
function appendMsg(data,type) {
    //$(".w-login").removeClass("show").addClass("hide");
	var toReceiver = $("#toReceiver").val();
    if (typeof data.msgs != 'undefined'){
        data.msgs = replace_em(data.msgs);
    }
	if (data.type == 'kh' && data.subType  =='txt'){
		var str = '<div class="liaoBox kh"><div style="float: right"> <div class="kh-headCon  right-bg"> <div class="kh-headBg">'+ data.msgs + '</div> </div> <div class="kh-head"><img src="'+ data.userPic +'"></div></div> </div>';
	}
	if (data.type == 'kh' && data.subType == 'image'){
		var str = '<div class="liaoBox kh"><div style="float: right"> <div class="kh-headCon  right-bg"> <div class="kh-headBg"><img class="webim-msg-img" src="'+ data.image + '"></div> </div> <div class="kh-head"><img src="'+ data.userPic +'"></div></div> </div>';
	}

    if (data.type == 'kh' && data.subType == 'audio'){
        var str = '<div class="liaoBox kh"><div class="liao-y"> <div class="kh-headCon  right-bg"> <div class="kh-headBg">[语音]<i class="yin-icon j-yuyin"></i></div> </div> <div class="kh-head"><img src="'+ data.userPic +'"></div></div> </div>';
    }

	//暂不支持发送房源卡片
    if (data.type == 'kh' && data.subType  == 'card') {
        var houseInfo = JSON.parse(data.houseInfo);
        //console.log(houseInfo);
        if(undefined != houseInfo.cityid) {
            var cardCityId = houseInfo.cityid;
        } else if(undefined != houseInfo.cityId) {
            var cardCityId = houseInfo.cityId;
        }
        //console.log(cardCityId);
        var cardCityDomain = cityIdDomain[cardCityId];
        //console.log(cardCityDomain);
        if(houseInfo.houseType == 1) {
            var weburl = 'https://'+cardCityDomain+host+'/ershoufang/'+houseInfo.houseID + '.html';
        } else {
            var weburl = 'https://'+cardCityDomain+host+'/zufang/'+houseInfo.houseID + '.html';
        }
        //console.log(weburl);
        var str = '<div class="liaoBox kh"><div style="float: right"><div class="kh-headCon right-bg"> <div class="kh-headBg"><a target="_blank" href="'+ weburl +'"><div class="fySty"><img src="'+ houseInfo.imgurl+'" onerror="houseimgerror(this)"><p>'+ houseInfo.title +'</p> <p><span>'+ houseInfo.area +'</span></p><p><strong>'+ houseInfo.price +'</strong></p></div></a></div> </div> <div class="kh-head"><img src="'+ data.userPic +'"></div></div></div>';
    }
	if (data.type == 'jjr' && data.subType  =='txt'){
        var str = '<div class="liaoBox jjr"> <div class="kh-head"><img src="'+ data.userPic +'" onerror="defaultBrokerError(this);"></div> <div class="kh-headCon left-bg"><div class="kh-headBg">'+ data.msgs + '</div></div></div>';
	}
	if (data.type == 'jjr' && data.subType  =='image'){
        var str = '<div class="liaoBox jjr"> <div class="kh-head"><img src="'+ data.userPic +'"></div> <div class="kh-headCon left-bg"> <div class="kh-headBg"><img class="webim-msg-img" src="'+ data.image + '"></div> </div> </div>';
	}
    if (data.type == 'jjr' && data.subType == 'audio') {
        var str = '<div class="liaoBox jjr"> <div class="kh-head"><img src="'+ data.userPic +'"></div> <div class="kh-headCon left-bg"> <div class="kh-headBg"><i class="yin-icon k-yuyin"></i>收到语音, 请在手机上查看</div> </div> </div>';
    }
	if (data.type == 'jjr' && data.subType == 'card') {
        var houseInfo = JSON.parse(data.houseInfo);
        //console.log(houseInfo);
        if(undefined != houseInfo.cityid) {
            var cardCityId = houseInfo.cityid;
        } else if(undefined != houseInfo.cityId) {
            var cardCityId = houseInfo.cityId;
        }
        //console.log(cardCityId);
        var cardCityDomain = cityIdDomain[cardCityId];
        //console.log(cardCityDomain);
        if(houseInfo.houseType == 1) {
            var weburl = 'https://'+cardCityDomain+host+'/ershoufang/'+houseInfo.houseID + '.html';
        } else {
            var weburl = 'https://'+cardCityDomain+host+'/zufang/'+houseInfo.houseID + '.html';
        }

        //console.log(weburl);
	    var str = '<div class="liaoBox jjr"><div class="kh-head"><img src="'+ data.userPic +'"></div><a  target="_blank" href="'+ weburl +'"><div class="kh-headCon left-bg"><div class="kh-headBg"><div class="fySty"><img src="'+ houseInfo.imgurl +'" onerror="houseimgerror(this)"><p>'+ houseInfo.title +'</p><p><span>'+ houseInfo.area +'</span></p><p><strong>'+ houseInfo.price +'</strong></p></div></div></div></a></div>';
    }
	if (data.type == 'time') {
		var str = '<div class="list-time">'+ data.strTime +'</div>';
	}
	if (data.type == 'xqdt' && data.subType == "txt") {
        var msg = JSON.parse(data.msgs);
        var str = '<dl class="list-mokuai  xq-dt clear"><dt><img src="' + RESOURCES + '/pc/im/images/t02.png"></dt><dd><a target="_blank" href="https://'+msg.city_domain+host+'/ershoufang/'+msg.house_id+'.html"><div class="list-mokuaiBg"><h5 class="list-tit-m"><p>您关注的（' + msg.community_name + ' - ' + msg.business_area_name +'）新上一套房源</p></h5><div class="tit-con clear"><div class="tit-con-main"><p><span>' + msg.house_title + '</span></p><p>' + msg.house_hx + '&bull;' + msg.house_area + '㎡&bull;' + msg.house_heading + '</p></div><div class="tit-con-price"><i>' + msg.house_in_date + '发布</i><p>' + msg.house_price + '万</p></div></div></div></a></dd></dl>';
    }
    if (data.type == 'xqdt' && data.subType == "link") {
        var str = '<a class="more-xq" target="_blank" href="https://'+city_domain+host+'/user">查看更多关注小区新上房源</a>';
    }
    if (data.type == 'fydt') {
        var msg = JSON.parse(data.msgs);
        var classname = '';
        var tit_name = '';
        var url='javascript:void(0);';
        if(msg.change_type == 2) {
            classname = 't-shou';
            tit_name = '您关注的房源已停售';
            url = 'https://'+msg.city_domain+host+'/ershoufang/'+msg.house_id+'.html';
        } else if(msg.change_type == 1) {
            tit_name = '您关注的房源已成交';
            //url = 'http://'+msg.city_domain+host+'/user?filter=3';
            url = 'https://'+msg.city_domain+host+'/sold/'+msg.house_id+'.html';
        } else if(msg.change_type == 3) {
            tit_name = '您关注的房源价格上调<i class="iSty red-top"></i>';
            //url = 'http://'+msg.city_domain+host+'/user?filter=2';
            url = 'https://'+msg.city_domain+host+'/ershoufang/'+msg.house_id+'.html';
        } else if(msg.change_type == 4) {
            tit_name = '您关注的房源价格下降<i class="iSty green-bottom"></i>';
            //url = 'http://'+msg.city_domain+host+'/user?filter=2';
            url = 'https://'+msg.city_domain+host+'/ershoufang/'+msg.house_id+'.html';
        }
        var str = '<dl class="list-mokuai ' + classname + ' clear"><dt><img src="' + RESOURCES + '/pc/im/images/t03.png"></dt><dd><a target="_blank" href="'+url+'"><div class="list-mokuaiBg"><h5 class="list-tit-m"><span class="tit-name">' + tit_name + '</span><span class="jt-icon"></span></h5><div class="tit-con clear"><div class="tit-con-main"><p><span>' + msg.house_title + '</span></p><p>' + msg.house_hx + '&bull;' + msg.house_area + '㎡&bull;' + msg.house_heading + '</p></div><div class="tit-con-price"><p>' + msg.house_price + '万</p></div></div> </div></a></dd></dl>'
    }
    if (data.type == 'znxf') {
        var msg = JSON.parse(data.msgs);
        if(msg.card_type == 1) {
            var str = '<div class="zn-Box "><div class="zn-head"><img src="' + RESOURCES + '/pc/im/images/t04.png"></div><div class="zn-Con"><!-- 蓝色卡片 --><div class="cardBox card-01"><div class="card-style card-01-bg"><a target="_blank" href="https://'+msg.city_domain+host+'/smart/ershoufang">您的二手房选房卡 ' + msg.card_time + '  新匹配出 ' + msg.house_count + ' 套房源</a></div></div></div></div>';
        } else {
            var str = '<div class="zn-Box "><div class="zn-head"><img src="' + RESOURCES + '/pc/im/images/t04.png"></div><div class="zn-Con"><!-- 蓝色卡片 --><div class="cardBox card-01"><div class="card-style card-02-bg"><a target="_blank" href="https://'+msg.city_domain+host+'/smart/zufang">您的租房选房卡 ' + msg.card_time + '  新匹配出 ' + msg.house_count + ' 套房源</a></div></div></div></div>';
        }
    }

	switch (type) {
		case 'prepend':
			$("#"+data.toReceiver).prepend(str);
			break;
		case 'append':
			$("#"+data.toReceiver).append(str);
			break;
		default:
			$("#"+data.toReceiver).append(str);
	}
    if (typeof data.scrollTop != 'undefined' && data.scrollTop && data.type == 'kh'){
        $("#messageBox_"+toReceiver).scrollTop($("#messageBox_"+toReceiver).get(0).scrollHeight);
    }
    if ( data.type != 'kh' && curPage ==1){
        $("#messageBox_"+toReceiver).scrollTop($("#messageBox_"+toReceiver).get(0).scrollHeight);
    }
}

function scrollButtom() {
    var toReceiver = $("#toReceiver").val();
    $("#messageBox_"+toReceiver).scrollTop($("#messageBox_"+toReceiver).get(0).scrollHeight);
}

//获取聊天历史记录
function getMessageList(userID,agentUserID,pageNo,pageSize){
    curPage = pageNo; //加载消息的时候,把页码切换成获取的页码
	var data = {"userID":userID,"agentUserID":agentUserID,"pageNo":pageNo,"pageSize":pageSize};
	var url = '/im/ajaxmessages';
	var toReceiver = $("#toReceiver").val();
	$.ajax({
		type:"POST",
		url:url,
		data:data,
		success:function(data){
			if (data != 'faile'){
				var messageInfoList  = JSON.parse(data);
				//messageInfoList.type = 'messages';
				messageInfoList.userID = userID;
				messageInfoList.agentUserID = agentUserID;
                messageInfoList.scrollTop = false;
				if (pageNo ==1){
                    messageInfoList.scrollTop = true;
				}else {
				 	$('#loadMore' + agentUserID + pageNo).remove();
				}
				showMessagelist(messageInfoList);
			}
		},
		error:function(data){
		}
	});
}

function showMessagelist(messageInfoList) {
    var data = messageInfoList.results;
    var toReceiver = $("#toReceiver").val();
    if (toReceiver != 'xiaoqudongtai' && toReceiver != 'fangyuandongtai' || toReceiver != 'zhinengxuanfang') {
        if (typeof messageInfoList.total == 'undefined' || messageInfoList.total == 0) {
            $('#messageBox_' + toReceiver).html('');
            appendData = {
                "type": "jjr",
                "toReceiver": "messageBox_" + toReceiver,
                "msgs": "你好,有什么可以帮助你的么?",
                "userPic": brokerPic
            };
            appendMsg(appendData, 'prepend');
        }
    }
    if (typeof messageInfoList.total !== 'undefined' && data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            var oldTime = (new Date(data[i].in_date)).getTime();
            if (i > 0) {
                var curTime = (new Date(data[i - 1].in_date)).getTime();
                var intervalTime = curTime - oldTime;
                if (intervalTime > 120000) {
                    var strTime = formatTime(curTime);
                    var appendData = {"type": "time", "toReceiver": "messageBox_" + toReceiver, "strTime": strTime};
                    appendMsg(appendData, 'prepend');
                }
            }
            var appendData = {};
            //conversation_type = 1 为用户发给服务人员, =2 为相关服务人发给用户
            if (data[i].conversation_type == 1) {
                if (data[i].message_type == 0) {
                    appendData = {
                        "type": "kh",
                        "subType": "txt",
                        "toReceiver": "messageBox_" + toReceiver,
                        "msgs": data[i].message_text_content,
                        "userPic": userPic,
                        "scrollTop" : messageInfoList.scrollTop,
                        "fromType":'kh'
                    };
                }
                if (data[i].message_type == 1) {
                    appendData = {
                        "type": "kh",
                        "subType": "card",
                        "toReceiver": "messageBox_" + toReceiver,
                        "houseInfo": data[i].message_extend_content,
                        "userPic": userPic,
                        "scrollTop" : messageInfoList.scrollTop,
                        "fromType":'kh'
                    };
                }
                if (data[i].message_type == 3) {
                    appendData = {
                        "type": "kh",
                        "subType": "audio",
                        "toReceiver": "messageBox_" + toReceiver,
                        "msgs": data[i].message_text_content,
                        "userPic": userPic,
                        "scrollTop" : messageInfoList.scrollTop,
                        "fromType":'kh'
                    };
                }
                if (data[i].message_type == 4) {
                    appendData = {
                        "type": "kh",
                        "subType": "image",
                        "toReceiver": "messageBox_" + toReceiver,
                        "image": data[i].message_text_content,
                        "userPic": userPic,
                        "scrollTop" : messageInfoList.scrollTop,
                        "fromType" : 'kh'
                    };
                }
            } else {
                if(data[i].job_leave == 0) {
                    $('#'+data[i].agent_user_id+'id').attr('leave', 0);
                    $('#'+data[i].agent_user_id+'id img').attr('src', data[i].img);
                    $('#content_'+data[i].agent_user_id+'id span i').text('（已离职）');
                    $('#content_'+data[i].agent_user_id+'id .j-tel').text('');
                }
                if (data[i].message_type == 0) {
                    appendData = {
                        "type": "jjr",
                        "subType": "txt",
                        "toReceiver": "messageBox_" + toReceiver,
                        "msgs": data[i].message_text_content,
                        "userPic": data[i].img,
                        "scrollTop" : messageInfoList.scrollTop,
                        "fromType" :'jjr'
                    };
                } else if (data[i].message_type == 1) {
                    appendData = {
                        "type": "jjr",
                        "subType": "card",
                        "toReceiver": "messageBox_" + toReceiver,
                        "houseInfo": data[i].message_extend_content,
                        "userPic": data[i].img,
                        "scrollTop" : messageInfoList.scrollTop,
                        "fromType" :'jjr'
                    };
                } else if (data[i].message_type == 3) {
                    appendData = {
                        "type": "jjr",
                        "subType": "audio",
                        "toReceiver": "messageBox_" + toReceiver,
                        "msgs": data[i].message_text_content,
                        "userPic": data[i].img,
                        "scrollTop" : messageInfoList.scrollTop,
                        "fromType" :'jjr'
                    };
                } else if (data[i].message_type == 4) {
                    appendData = {
                        "type": "jjr",
                        "subType": "image",
                        "toReceiver": "messageBox_" + toReceiver,
                        "image": data[i].message_text_content,
                        "userPic": data[i].img,
                        "scrollTop" : messageInfoList.scrollTop,
                        "fromType" :'jjr'
                    };
                } else if (data[i].message_type == 5) {
                    appendData = {
                        "type": "xqdt",
                        "subType": "txt",
                        "toReceiver": "messageBox_" + toReceiver,
                        "msgs": data[i].message_extend_content,
                        "userPic": '',
                        "scrollTop" : messageInfoList.scrollTop
                    };
                } else if (data[i].message_type == 6) {
                    appendData = {
                        "type": "fydt",
                        "subType": "txt",
                        "toReceiver": "messageBox_" + toReceiver,
                        "msgs": data[i].message_extend_content,
                        "userPic": '',
                        "scrollTop" : messageInfoList.scrollTop
                    };
                } else if (data[i].message_type == 7) {
                    appendData = {
                        "type": "znxf",
                        "subType": "txt",
                        "toReceiver": "messageBox_" + toReceiver,
                        "msgs": data[i].message_extend_content,
                        "userPic": '',
                        "scrollTop" : messageInfoList.scrollTop
                    };

                }
            }
            appendMsg(appendData, 'prepend');
            if (i == data.length - 1) {
                if(messageInfoList.page_count == messageInfoList.page) {
                    var strTime = formatTime(oldTime);
                    var appendData = {"type": "time", "toReceiver": "messageBox_" + toReceiver, "strTime": strTime};
                    appendMsg(appendData, 'prepend');
                }
                $("#lastData").val(curTime);
            }
        }
        if(toReceiver == 'xiaoqudongtai' && messageInfoList.page == 1) {
            appendData = {
                "type": "xqdt",
                "subType": "link",
                "toReceiver": "messageBox_" + toReceiver,
                "msgs": "",
                "userPic": ""
            };
            appendMsg(appendData, 'append');
        }
        if (messageInfoList.page < messageInfoList.page_count) {
            var str = '<div id="loadMore' + messageInfoList.agentUserID + (messageInfoList.page + 1) + '" class="list-time" onclick="getMessageList(' + messageInfoList.userID + ',\'' + messageInfoList.agentUserID + '\',' + (messageInfoList.page + 1) + ',' + messageInfoList.page_size + ')">点击加载更多</div>';
            $('#messageBox_' + toReceiver).prepend(str);
        }
    }
}
function formatTime(time){
	var today = new Date(new Date().setHours(0,0,0,0));
	var yesterday = new Date(new Date().setHours(0,0,0,0) - 24*60*60*1000);
	var t = new Date(time);
	if(time - today <= 24*3600*1000 && time - today >=0){
		return  t.getHours() + ":" + addZero(t.getMinutes()) ;
	}else if(time - yesterday <= 24*3600*1000 && time - yesterday >= 0){
		return "昨天 " + t.getHours() + ":" + addZero(t.getMinutes()) ;
	}else if(time - yesterday < 0){
		return t.getFullYear() + "-" + addZero(t.getMonth()+1) + "-" + addZero(t.getDate()) + " " + addZero(t.getHours()) + ":" + addZero(t.getMinutes());
	}
}

function addZero(num){
	if(num >= 0){
		if(num < 10) {
			return '0' + num;
		}else{
			return num;
		}
	}

}

function getFileUrl(sourceId) {
	var url;
	if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
		url = document.getElementById(sourceId).value;
	} else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
		url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
	} else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
		url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
	}
	return url;
}

function preImg(sourceId) {
	var url = getFileUrl(sourceId);
	/*var imgPre = document.getElementById('imgpre');
	imgPre.src = url;*/
	var toReceiver = $("#toReceiver").val();
	$('#chatImg_'+toReceiver).html('<img class="webim-msg-img" src="'+url+'">');
    $('#chatImg_'+toReceiver).focus();
}


function addBroker(agencyID, msg, messageType, useUserPic) {
    if(contactUserId == 0) {
        window.location.href = imloginurl;
        return false;
    }

    if(!isActived){
        alert("你已经被禁言");
    }

    $('.w-login').remove();
	var data = {"agencyID":agencyID,'cityID':cityId};
    if(undefined == msg) {
        msg = "您好,有什么可以帮助您的么?";
    }
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

			if($('#'+data['brokerid']+'id').length == 0){
			    //console.log(1111111);
                //$("#toReceiver").val(data['brokerid']+'brokerid');
                $("#toReceiver").val(data['brokerid']+'id');
                if(messageType == 4) {
                    var msgStr = "[图片]";
                } else if(messageType == 1) {
                    var houseInfo = JSON.parse(msg);
                    var msgStr = '[房源] '+houseInfo.area+' '+houseInfo.price;
                } else if(messageType == 3) {
                    if(useUserPic == 1) {
                        var msgStr = "[语音]";
                    } else {
                        var msgStr = "收到语音,请在手机上查看";
                    }
                } else {
                    var msgStr = replace_em(msg);
                }
				$('#im_list li').removeClass("cur");
				var str = '<li id="'+ data['hx_id'] +'" receiveID="'+ data['brokerid'] +'" status="'+ data['status'] +'" mobile="'+ data['mobile'] +'" class="cur"> <div class="head-icons"><img src="'+ data['brokerimg'] +'" onerror="defaultBrokerError(this);"></div> <div class="head-cons"> <p><strong id="name_'+ data['hx_id'] +'">'+ data['bname'] +' </strong><span id="time_'+ data['hx_id'] +'"></span></p> <p id="msg_'+ data['hx_id']+'">'+ msgStr +'</p> </div> </li>';
				$('#im_list').prepend(str);
                brokerPic = data['brokerimg'];
				appendContent('broker', data['hx_id'], data['bname'],data['status'],data['mobile']);
                $('#messageBox_' + data['hx_id']).html('');
                if(useUserPic == 1) {
                    var img = userPic;
                    var fromType = 'kh';
                } else {
                    var img = data['brokerimg']
                    var fromType = 'jjr';
                }
                if(messageType == 4) {
                    appendData = {
                        "type":fromType,
                        "subType":"image",
                        "toReceiver":"messageBox_"+data['hx_id'],
                        "image":msg,
                        "userPic":img,
                        "scrollTop":true,
                        "fromType":fromType
                    };
                } else if(messageType == 1) {
                    appendData = {
                        "type":fromType,
                        "subType":"card",
                        "toReceiver":"messageBox_"+data['hx_id'],
                        "houseInfo":msg,
                        "userPic":img,
                        "scrollTop":true,
                        "fromType":fromType
                    };
                } else if(messageType == 3) {
                    appendData = {
                        "type":fromType,
                        "subType":"audio",
                        "toReceiver":"messageBox_" + data['hx_id'],
                        "msgs":msg,
                        "userPic":img,
                        "scrollTop":true,
                        "fromType":fromType
                    };
                } else {
                    appendData = {
                        "type":fromType,
                        "subType":"txt",
                        "toReceiver":"messageBox_" + data['hx_id'],
                        "msgs":msg,
                        "userPic":img,
                        "scrollTop":true,
                        "fromType":fromType
                    };
                }

                appendMsg(appendData, 'prepend');
				$(".two_cons").removeClass("hide").addClass("show");
			}else{
                $('[receiveID='+data['brokerid']+']').attr('status',data['status']);
				//openChat($('[receiveID='+data['brokerid']+']'));
			}
		},
		error:function(data){
		}
	});

}

function openChat(obj) {
    curPage = 1; //点击li展开详情的时候,把当前页码设置为1
    var liIndex = $(obj).index();
    var liID = $(obj).attr('id');
    var status = $(obj).attr('status');
    var userID = contactUserId;
    var pageNo = 1;
    var pageSize = 6;
    var receiveID = $(obj).attr('receiveID');
    var name = $('#name_'+liID).text();
    $("#toReceiver").val(liID);
    $("#num_"+liID).remove();
    $(obj).addClass("cur");
    $(obj).siblings().removeClass("cur");
    //显示内容区
    var contentID = $('#content_'+liID).length;
    if ( contentID == 0){
        if(liID == 'xiaoqudongtai' || liID =='fangyuandongtai' || liID == 'zhinengxuanfang') {
            appendContent(liID, liID, name, status);
        } else {
            var mobile = $(obj).attr('mobile');
            appendContent('broker', liID, name, status, mobile);

        }
        getMessageList(userID,receiveID,pageNo,pageSize);
    }else {
        $("#content_"+liID).show().siblings().hide();
        $("#messageBox_"+liID).html('');
        getMessageList(userID,receiveID,pageNo,pageSize);
    }
    if(liID != 'xiaoqudongtai' && liID !='fangyuandongtai' && liID != 'zhinengxuanfang') {
        brokerPic = $('#'+liID+' img').attr('src');
    }

    $(".two_cons").removeClass("hide").addClass("show");
    calculateUnreadNum();
	imgDisable();//输入文字后，图片入口置灰，不能点击(有文字的时候上传图片不可用)
}
/*
function convertUidHxId(id) {
	if(str.indexOf('uid') >= 0) {
		return str.replace('uid',id,'');
	} else {
		return str + 'uid';
	}
}
*/
function convertAgentIdHxId(str) {
	if(str.indexOf('id') >= 0) {
		return str.replace('id','');
	} else {
		return str + 'id';
	}
}

function appendListAgent(message,curTime) {
	//message.from = '508044brokerid';
    //如果是别的端同步过来的自己发的消息
    //console.log(message);
    if(message.from.indexOf('uid') >= 0) {
        var agentID = convertAgentIdHxId(message.to);
    } else {
        var agentID = convertAgentIdHxId(message.from);
    }
    //如果列表页上没有这个经纪人,则创建一下
    var agentHTML = agentID + 'id';
    //console.log(agentHTML);
    var agentLiReceiveID = $('#'+agentHTML).attr('receiveID');
	if(undefined == agentLiReceiveID) {
        if(message.from.indexOf('uid') >= 0) {
            if(message.messageType == 1) {
                addBroker(agentID,JSON.stringify(message.ext.HOUSE_INFO),message.messageType, 1);
            } else {
                addBroker(agentID,message.data,message.messageType, 1);
            }
        } else {
            if(message.messageType == 1) {
                addBroker(agentID,JSON.stringify(message.ext.HOUSE_INFO), message.messageType);
            } else {
                addBroker(agentID,message.data, message.messageType);
            }
        }

	}

    var toReceiver = $("#toReceiver").val();
    var strTime = formatTime(curTime);
    var num = $('#num_'+ agentHTML).html();

    $('#time_'+ agentHTML).html(strTime);

    if (toReceiver != agentHTML){
        if (typeof num =='undefined'){
            var str = '<i class="nums" id="num_'+agentHTML+'">1</i>';
            $('#name_'+ agentHTML).append(str);

        }else {
            $('#num_' + agentHTML).html(parseInt(num) + 1);
        }
    }

    var messageStr = message.data;
    if (message.messageType == 0){
        messageStr = replace_em(message.data);
    }
    if (message.messageType == 4){
        messageStr = '[图片]';
    }
    /*if(message.messageType == 1) {
        messageStr = message.data;
        //messageStr = '[房源卡片]';
    }*/
    if(message.messageType == 3) {
        if(message.from.indexOf('uid') >= 0) {
            messageStr = '[语音]';
        } else {
            messageStr = '收到语音,请在手机上查看';
        }

    }
    //console.log(messageStr);
    var msgId = 'msg_'+agentHTML;
    document.getElementById(msgId).innerHTML = messageStr;
    var status = $(document.getElementById(agentHTML)).attr('status');
    var mobile = $(document.getElementById(agentHTML)).attr('mobile');
    var str = '<li id="' + agentHTML + '" receiveID="' + agentID + '" status="' + status + '" mobile="' + mobile + '">' + document.getElementById(agentHTML).innerHTML + '</li>';
    $('#'+agentHTML).remove();
    $('#im_list').prepend(str);
}

function appendListAdmin(message, curTime,isViewed) {
    if(message.messageType == MESSAGE_TYPE_COMMUNITY_NEWS) {
        var id = 'xiaoqudongtai';
        var liName = '小区动态';
        var liImg = RESOURCES + '/pc/im/images/t02.png';
    } else if(message.messageType == MESSAGE_TYPE_HOUSE_NEWS) {
        var id = 'fangyuandongtai';
        var liName = '房源动态';
        var liImg = RESOURCES + '/pc/im/images/t03.png';
    } else if(message.messageType == MESSAGE_TYPE_SMART_CARD){
        var id = 'zhinengxuanfang';
        var liName = '选房卡';
        var liImg = RESOURCES + '/pc/im/images/t04.png';
    } else {
        return;
    }
    var strTime = formatTime(curTime);
    var data = message.data;
    if(message.messageType == MESSAGE_TYPE_COMMUNITY_NEWS) {
        var msg_content = '您关注的小区'+ data.community_name+'有新上房源';
    } else if(message.messageType == MESSAGE_TYPE_HOUSE_NEWS) {
        var change_type = '';
        if(data.change_type == 1) {
            change_type = '成交';
        } else if(data.change_type == 2) {
            change_type = '停售';
        } else {
            change_type = '价格有变动';
        }
        var msg_content = '您关注的房源'+ data.house_title+change_type;
    } else if(message.messageType == MESSAGE_TYPE_SMART_CARD) {
        var msg_content = '有符合您找房条件的新上房源';
    }

    if($('#'+id).attr('receiveID') == undefined) {
        var unRead = '';
        if(!isViewed) {
            var unRead = '<i class="nums" id="num_' + id + '">1</i>';
        }
        var str = '<li id="' + id + '" receiveID="' + id + '"><div class="head-icons"><img src="' + liImg + '"></div><div class="head-cons"><p id="name_' + id + '"><strong>' + liName + unRead + '</strong><span id="time_' + id + '">' + strTime + '</span></p><p id="msg_' + id + '">' + msg_content + '</p></div></li>';
        $('.w-login').addClass('hide');
    } else {
        var num = $('#num_'+ id).html();
        $('#time_'+ id).html(strTime);
        if (typeof num =='undefined'){
            if(!isViewed) {
                var str = '<i class="nums" id="num_'+ id +'">1</i>';
                $('#name_'+ id).append(str);
            }
        }else {
            if(!isViewed) {
                $('#num_'+ id).html(parseInt(num)+1);
            }
        }
        $('#msg_'+ id).html(msg_content);
        var str = '<li id="' + id + '" receiveID="' + id + '">' + $('#'+id).html() + '</li>';
        $('#'+id).remove();
    }
    $('#im_list').prepend(str);
}

function calculateUnreadNum() {
    var total_num = 0;
    $('#im_list i').each(function() {
        total_num += parseInt($(this).text());
    });
    $('#num_total').text(total_num);
    if(total_num > 0) {
        $('#num_total').removeClass('hide');
    } else {
        $('#num_total').addClass('hide');
    }
}
broker_info = {};
function clientSendMessage(sendType) {
    var toReceiver = $("#toReceiver").val();
    //console.log(1);
    if($('#'+toReceiver).attr('leave') == 0) {
        var messageBox = '<div class="news-box" style="text-align: center; margin-bottom: 0px" onclick="scrollButtom()">该经纪人已离职</div>';
        $("#messageBox_"+toReceiver).append(messageBox);
        var timeout=setTimeout(function () {
            $(".news-box").fadeOut(1000);
        }, 2000);
    } else {
        broker_info = {
            "userhid": toReceiver,
            "nickname": $('#name_'+toReceiver).text().replace(/[\r\n\s+]/g, ""),
            "imageurl": $('#' + toReceiver + ' div img').attr('src'),
            "phonenum": $('#' + toReceiver).attr('mobile')
        };
        if(sendType == 'text'){
            sendPrivateText(0);
        }else{
            sendPrivateImg();
        }

        //console.log(broker_info);
        $("#chatImg_"+toReceiver).addClass('hide').removeClass('block');
        $("#chat_"+toReceiver).addClass('block').removeClass('hide');
        if(sendType == 'text') {
            $("#chat_"+toReceiver).val('');
        }
        $("#chatImg_"+toReceiver).html('');
        $("#btn_"+toReceiver).attr('sendType','text');
    }

}

//$(".t_Mains li").eq(liIndex).addClass("show");
//$(".t_Mains li").eq(liIndex).siblings().removeClass("show");

//输入文字后，图片入口置灰，不能点击/不能同时发送文字和图片
function imgDisable(){
	$("textarea").bind('input propertychange', function(){
		var dangqiantext = $(this).val();
		if(dangqiantext.length>0){
			$(this).siblings(".bqBox").children(".imgIcon").children("input").attr("disabled",true);
			$(this).siblings(".bqBox").children(".bqBox .imgIcon").css("opacity",0.5);
		}else{
			$(this).siblings(".bqBox").children(".imgIcon").children("input").removeAttr("disabled");
			$(this).siblings(".bqBox").children(".bqBox .imgIcon").css("opacity",1);
		}		
	});
}