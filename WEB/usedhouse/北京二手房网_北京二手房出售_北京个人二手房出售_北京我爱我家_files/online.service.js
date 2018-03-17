function getOnlineService(userId, queue){
	//获取token
	$.ajax({
		type: "post",
		url: '/user/ajaxtoken',
		data: {},
		dataType: "json",
		success: function (data) {
			if (data.code == 200) {
				var key = data.data;
				var params = "height=660,width=890,directories=no,location=no,menubar=no,scrollbars=no,resizeable=no,status=no,toolbar=no,top=100,left=200";
				var host = 'http://webmcc.bacic5i5j.com:8998/';//生产
				var hostTest = 'http://10.2.1.125:8080/';//测试
				var nowHost = window.location.hostname;
				if (nowHost.indexOf("test") > 0) {//联调环境
					var url = hostTest + 'EliteWebChat/jsp/standard/customer.jsp?userid=' + userId + '&key=' + key + '&queue=' + queue;
					window.open(url, '', params);
				} else {//非联调环境（测试、生产、正式）
					var url = host + 'EliteWebChat/jsp/standard/customer.jsp?userid=' + userId + '&key=' + key + '&queue=' + queue;
					window.open(url, '', params);
				}
			} else {
				console.log('没登录');
			}
		},
		error: function (data) {
			console.log('AJAX请求错误');
		}
	});
}

function getLeaveMessage(userId, data){
		var params = "height=660,width=890,directories=no,location=no,menubar=no,scrollbars=no,resizeable=no,status=no,toolbar=no,top=100,left=200";
		var url = 'http://webmcc.bacic5i5j.com:8998/EliteWebChat/jsp/standard/questtionMessage/ajia.jsp?queue='+data;
		window.open(url,'',params);
}

/**
 * show select service type (立即咨询)
 */
$('.zx-btn').on('click', function(){
	//login ok
	if($(this).attr('hrefs') == '') {
		$(".mask-pop").css("z-index",1220);
		$(".fu-type").removeClass("hide");
		work = workTime(onlinecityid);
		$('.type-con>li').each(function(index){
			if(index == 0) {
				$(this).children('span').attr('val', work.suggestion);
			} else if(index == 1) {
				$(this).children('span').attr('val', work.rent);
			} else {
				$(this).children('span').attr('val', work.sale);
			}
		});
	} else {
		//go to login and save cookie
		setCookie('onlineservice', '345');
		var url=$(this).attr('hrefs');
		location.href=url;
	}
});

$(".type-con li").on("click",function(){
		$(this).addClass("cur");
		$(this).siblings().removeClass("cur");
});

$('#onlineService').on('click', function(){
	work = workTime(onlinecityid);
	var time=new Date();
	var day=time.getDay().toString(); //get current week
	var hour=time.getHours(); //get current hour
	var minute=time.getMinutes(); //get current minute
	var ams=work.am.split(':');
	var pms=work.pm.split(':');
	$('.type-con>li').each(function(index){
		if($(this).hasClass('cur')) {
			if(work.week.indexOf(day) >= 0) {
				if((hour > ams[0] || (hour == ams[0] && minute >= ams[1])) 
					&& (hour < pms[0] || ( hour == pms[0]  && minute <= pms[1]))) {
					getOnlineService(userId, $(this).children('span').attr('val')); //work time
				} else {
					getLeaveMessage(userId, $(this).children('span').attr('val')); //time
				}
			} else {
				getLeaveMessage(userId, $(this).children('span').attr('val')); //time
			}
			return false;
		}
	});
});

showService();
function showService() {
	var value=getCookie('onlineservice');
	if(value) {
		work = workTime(onlinecityid);
		$('.work_time').html(work.name);
		$(".mask-pop,.zxkf-pop").removeClass("hide");
		delCookie('onlineservice');
	}
}

/**
 * show service and work time
 */
$(".bar-kf").on("click",function(){
	work = workTime(onlinecityid);
	$('.work_time').html(work.name);
	$(".mask-pop,.zxkf-pop").removeClass("hide");
});

$(".zxkf-close").on("click",function(){
	$(".mask-pop,.zxkf-pop").addClass("hide");
});

function workTime(cityId) {
	var data=[];
	//beijing
	data[1] = {
		'name':'周一至周日   09:00 ~ 20:00',
		'week':'1,2,3,4,5,6,0', //0为周日
		'am':'09:00',
		'pm':'20:00',
		'suggestion':101,
		'rent':102,
		'sale':103
	};
	//hangzhou
	data[2] = {
		'name':'周一至周日   08:45 ~ 20:00',
		'week':'1,2,3,4,5,6,0',
		'am':'08:45',
		'pm':'20:00',
		'suggestion':107,
		'rent':108,
		'sale':109
	};
	//suzhou
	data[5] = {
		'name':'周一至周日   09:00 ~ 20:00',
		'week':'1,2,3,4,5,6,0',
		'am':'09:00',
		'pm':'20:00',
		'suggestion':113,
		'rent':114,
		'sale':115
	};
	//taiyuan
	data[6] = {
		'name':'周一至周日   08:45 ~ 20:00',
		'week':'1,2,3,4,5,6,0',
		'am':'08:45',
		'pm':'20:00',
		'suggestion':131,
		'rent':132,
		'sale':133
	};
	//tianjin
	data[7] = {
		'name':'周一至周日   09:00 ~ 18:00',
		'week':'1,2,3,4,5,6,0',
		'am':'09:00',
		'pm':'18:00',
		'suggestion':125,
		'rent':126,
		'sale':127
	};
	//nanjing
	data[8] = {
		'name':'周一至周日   08:00 ~ 18:00',
		'week':'1,2,3,4,5,6,0',
		'am':'08:00',
		'pm':'18:00',
		'suggestion':137,
		'rent':138,
		'sale':139
	};
	//shanghai
	data[9] = {
		'name':'周一至周日   09:00 ~ 20:00',
		'week':'1,2,3,4,5,6,0',
		'am':'09:00',
		'pm':'20:00',
		'suggestion':119,
		'rent':120,
		'sale':121
	};
	//chengdu
	data[15] = {
		'name':'周一至周五   09:00 ~ 18:00',
		'week':'1,2,3,4,5',
		'am':'09:00',
		'pm':'18:00',
		'suggestion':143,
		'rent':144,
		'sale':145
	};
	//nanning
	data[16] = {
		'name':'周一至周五   09:00 ~ 18:00',
		'week':'1,2,3,4,5',
		'am':'09:00',
		'pm':'18:00',
		'suggestion':149,
		'rent':150,
		'sale':151
	};
	//zhengzhou
	data[18] = {
		'name':'周一至周五   08:30 ~ 18:00',
		'week':'1,2,3,4,5',
		'am':'08:00',
		'pm':'18:00',
		'suggestion':173,
		'rent':174,
		'sale':175
	};
	//wuxi
	data[19] = {
		'name':'周日至周五   09:00 ~ 17:30',
		'week':'1,2,3,4,5,0',
		'am':'09:00',
		'pm':'17:30',
		'suggestion':185,
		'rent':186,
		'sale':187
	};
	//wuhan
	data[20] = {
		'name':'周一至周五   09:00 ~ 17:30',
		'week':'1,2,3,4,5',
		'am':'09:00',
		'pm':'17:30',
		'suggestion':155,
		'rent':156,
		'sale':157
	};
	//nanchang
	data[101] = {
		'name':'周一至周六   09:00 ~ 18:00',
		'week':'1,2,3,4,5,6',
		'am':'09:00',
		'pm':'18:00',
		'suggestion':167,
		'rent':168,
		'sale':169
	};
	//changsha
	data[22] = {
		'name':'周一至周日   09:00 ~ 18:00',
		'week':'1,2,3,4,5,6,0',
		'am':'09:00',
		'pm':'18:00',
		'suggestion':161,
		'rent':162,
		'sale':163
	};
	if (onlinecityid != '' && workName != '' && workWeek != '' && workAM != '' && workPM != '') {
		data[parseInt(onlinecityid)].name = workName;
		data[parseInt(onlinecityid)].week = workWeek;
		data[parseInt(onlinecityid)].am = workAM;
		data[parseInt(onlinecityid)].pm = workPM;
	}
	return data[cityId];
}



//获取cookie
function getCookie(cookie_name) {
	var allcookies = document.cookie;
	var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度
	// 如果找到了索引，就代表cookie存在，
	if (cookie_pos != -1) {
		// 把cookie_pos放在值的开始，只要给值加1即可。
		cookie_pos += cookie_name.length + 1;//这里容易出问题，所以请大家参考的时候自己好好研究一下
		var cookie_end = allcookies.indexOf(";", cookie_pos);
		if (cookie_end == -1) {
			cookie_end = allcookies.length;
		}
		var value = unescape(allcookies.substring(cookie_pos, cookie_end));//这里就可以得到你想要的cookie的值了。。。
	}
	return value;
}

function setCookie(key, values) {
	var Days = 10; 
	var exp = new Date(); 
	exp.setTime(exp.getTime() + Days*1*60*1000); 
	document.cookie = key+"="+values + ";expires=" + exp.toGMTString(); 
}

//删除cookies
function delCookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
