$(function(){

//延迟显示图片

	$("img.lazy").lazyload({
		skip_invisible : false,
      	effect: "fadeIn"
    });
	
    //最后一个列表没有border
    noBorBot(".ershouf li");
    noBorBot(".zuf li");
    function noBorBot(noBorName){
        $(noBorName).last().addClass("no-bor-b");
    }
    //导航城市下拉框
    $(".top-city").click(function(event){
        $(".top-city-menu").slideToggle();
        event.stopPropagation();
    });
    $(".top-city-menu").click(function(event){
        event.stopPropagation();
    });
    
    $(document).on("click",function(){
    	$(".top-city-menu").hide();
    });

    $("body").bind("click",function(evt){
        if($(evt.target).parents(".search-box").length==0) {
            $(".search-menu").addClass("hide").removeClass("show");
        }
    });

    var searchType = 'ershoufang';
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var jumpurl='';

    //浏览器agent
    function getUserAgent() {
        if(userAgent.indexOf("Chrome") > -1) {
            userAgent="Chrome";
        } else if (userAgent.indexOf("Safari") > -1) {
            userAgent="Safari"
        } else {
            userAgent="Other"
        }
    }
    //getUserAgent();
    //console.log(userAgent);
    var setHistoryData = function(urls, xs, ys, names, totals) {
        var data={
            url:urls,
            x:xs,
            y:ys,
            name:names,
            total:totals
        };
        return data; 
    }

    //keywords url jump
    function searchJump(type,keywords,market_href){
        $.ajax({ 
            url: "/search/ajaxjump",
            type: "GET",
            data: {status:type,keywords:keywords},
            dataType: "JSON",
            async:false,
            success: function(result){
                jumpurl="/"+result;
                var datas=setHistoryData(jumpurl,'0','0',keywords,'0');
                setCookie(searchType+'_cookiekey', datas);
            }
        });
    }

    //add search to cookies
    $(document).on('click', '.search_w>li>a', function(){
        var names=$(this)[0].innerText.split("(");
        var data=setHistoryData($(this).attr("hrefs"), $(this).attr("x"), $(this).attr("y"), names[0], parseInt(names[1]));
        setCookie(searchType+'_cookiekey', data);
        toJumpUrl(searchType, data['url']);
    });

    //历史搜索
    $("#search, #ershoufang, #zufang, #xiaoqu, #jingjiren, #fangjia").on('click', function(){
        var str = '';
        if($(this).attr('id') == 'search') {
            var type=$(".search-tab .cur").attr("id");
        } else {
            var type=$(this).attr("id");
        }
        searchType = type; //del cookie when click .search-del
        var inputVal = $(this).val();
        if(inputVal !== ''){
            $(".search-menu").addClass("hide").removeClass("show");
            return false;
        }
        var history = getCookie(type+'_cookiekey');
        //console.log('show_history----------------------l');
        if(history){
            history = JSON.parse(history);
            str = '<p class="search-hot">搜索历史</p><ul class="history_w">';
            for ( var i in history) {
                var tm = JSON.parse(decodeURIComponent(history[i]));
                str += '<li><a href="'+tm.url+'" target="_blank">'+ tm.name +'</a></li>';
            }
            str += '</ul><p class="search-del">清除历史记录</p>';
        }
        $(".search-menu").html(str);
        $(".search-menu").addClass("show").removeClass("hide");
    });

    //删除搜索历史记录
    $(document).on('click', '.search-del', function(){
        delCookie(searchType+'_cookiekey');
        $(".search-menu").addClass("hide").removeClass("show");
    })

    var last;//keyup事件延迟请求
    //触发键盘事件
    $("#search, #ershoufang, #zufang, #xiaoqu, #jingjiren, #fangjia").keyup(function(event) {
        if($(this).attr('id') == 'search') {
            var type=$(".search-tab .cur").attr("id");
            isHomePage = true;
        } else {
            var type=$(this).attr("id");
            isHomePage = false;
        }
        var keywords = $(this).val();
        if(keywords == '') {
            $(".search-menu").html('');
            return false;
        }
        //last = event.timeStamp; //IE8 不兼容
        //setTimeout(function() {    //设时延迟0.5s执行
            //如果时间差为0（也就是你停止输入0.5s之内都没有其它的keyup事件发生）则做你想要做的事
            //if(last-event.timeStamp==0) {
                var keyCode = event.keyCode;
                //console.log('keyCode----->' + keyCode);
                // 48-90 数字＋字母 8 backSpace  32 space
                if((keyCode>=48 && keyCode<=90) || keyCode == 8 || keyCode == 32){
                    if(0 == keywords.length) {
                        $(".search-menu").html('');
                        return;
                    }
                    ajaxK("/ajaxsearch", type, encodeURI(keywords));
                }else if(keyCode == 13){//回车按钮
                    var market_href='';
                    if(type == 'fangjia'){ //地图找房搜索单独处理
                        var market_href = $('.search-menu ul li:first').children('a').attr('hrefs');
                        if(market_href) {
                            var datas=setHistoryData(market_href,'0','0',keywords,'0');
                            setCookie(type+'_cookiekey', datas);
                            toJumpUrl(type, market_href);
                        }
                    } else if(type == 'xiaoqu') {
                        var xiaoquurl='/'+type+'/_'+ encodeURI(keywords);
                        var datas=setHistoryData(xiaoquurl,'0','0',keywords,'0');
                        setCookie(type+'_cookiekey', datas);
                        toJumpUrl(type, xiaoquurl);
                    } else {
                        searchJump(type,keywords,market_href); 
                        toJumpUrl(type, jumpurl);
                    }
                }
            //}
        //}, 150);
    });

    var isHomePage = true;//是否为首页搜索标识，默认是首页（true）
    //点击开始找房
    $('.btn-search').on('click', function(){
        var keywords=$('.search-inp>input').val();
        var market_href=''; //nothind to do ?
        if($('.search-inp>input').attr('id') == 'search') {
            var type=$(".search-tab .cur").attr("id");
            isHomePage = true;
        } else {
            var type=$('.search-inp>input').attr("id");
            isHomePage = false;
        }
        if(keywords == '') {
            toJumpUrl(type, '/'+type);
            return false; 
        }
        if(type == 'fangjia') {
            var market_href = $('.search-menu ul li:first').children('a').attr('hrefs');
            if(market_href) {
                var datas=setHistoryData(market_href,'0','0',keywords,'0');
                setCookie(type+'_cookiekey', datas);
                toJumpUrl(type, market_href);
            }
        } else {
            searchJump(type,keywords,market_href); 
            toJumpUrl(type, jumpurl);
        }
    });

    function toJumpUrl(type, url) {
        getUserAgent(); //判断浏览器
        if(userAgent == "Safari") {
            if(!isHomePage && (type == 'ershoufang' || type == 'zufang' || type == 'jingjiren' || type == 'fangjia' || type=='xiaoqu')) {
                window.location.href=location.origin + url;
            } else {
                var newTab=window.open('about:blank');
                newTab.location.href=location.origin + url;
            }
        } else {
            if(!isHomePage && (type == 'ershoufang' || type == 'zufang' || type == 'jingjiren' || type == 'fangjia' || type=='xiaoqu')) {
                window.open(location.origin + url, "_self");
            } else {
                window.open(location.origin + url, "_blank");
            }
        }
    }
	
	//搜索关键字存储cookie
function setCookie(key, values) {
    var Days = 10;
    var exp = new Date();
    //exp.setTime(exp.getTime() + Days*24*60*60*1000);
    exp.setTime(exp.getTime() + Days*1*60*1000);
    var history=getCookie(key);
    if(history) {
        var news=JSON.parse(history);
        var is_exist = false;
        for(k in news) {
            if(JSON.parse(decodeURIComponent(news[k]))['url'] == values['url']) {
                is_exist = true;
            }
        }
        if(is_exist == false) {
            news.unshift(encodeURIComponent(JSON.stringify(values)));
            //console.log(JSON.stringify(news));
            document.cookie = key +"="+ encodeURIComponent(JSON.stringify(news)) + ";path=/;expires=" + exp.toGMTString();
        }
    } else {
        var history=[];
        history.unshift(encodeURIComponent(JSON.stringify(values)));
        //console.log(encodeURIComponent(JSON.stringify(values)));
        document.cookie = key +"="+ encodeURIComponent(JSON.stringify(history)) + ";path=/;expires=" + exp.toGMTString();
    }
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
//删除cookies
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1000);
    var cval=getCookie(name);
    if(cval != null) {
        //console.log(exp.toGMTString());
        //document.cookie= name + "="+ cval +";expires="+exp.toGMTString();
        document.cookie= name + "="+ cval +";path=/;expires="+exp.toGMTString();
    }
}

//*IE8支持placeholder占位符
if( !('placeholder' in document.createElement('input')) ){
    $('input[placeholder],textarea[placeholder]').each(function(){
        var that = $(this),
            text= that.attr('placeholder');
        if(that.val()===""){
            that.val(text).addClass('placeholder');
        }
        that.focus(function(){
            if(that.val()===text){
                that.val("").removeClass('placeholder');
            }
        })
            .blur(function(){
                if(that.val()===""){
                    that.val(text).addClass('placeholder');
                }
            })
            .closest('form').submit(function(){
                if(that.val() === text){
                    that.val('');
                }
            });
    });
}

    //右侧条
    
    
    $(".r-bar-con li").hover(
        function(){
            $(this).children(".layer").show().addClass("flipInX");
            $(".lay-list li").last().addClass("no-bor");
        },
        function(){
            $(this).children(".layer").hide().removeClass("flipInX");
        }

    );
    //首页回到顶部
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if( winTop > 0 ) {
            $(".bar-back").addClass("show");
            $(".bar-back").click(function(){
                $("html,body").animate({ scrollTop: 0 }, 1000);
            });
        }else {
            $(".bar-back").removeClass("show");
            $("html,body").stop(true);
        }
    });

    //选项卡
    tabCon(".lay-zhx-tab li",".lay-zhx-con","cur");
	tabCon(".lay-tab-tit li",".lay-tab-con","cur");
    function tabCon(tabNme,tabCon,classN){
        $(tabNme).click(function(){
            var iIndex = $(this).index();
            $(this).addClass(classN);
            $(this).siblings().removeClass(classN);

            $(tabCon).eq(iIndex).addClass("show").removeClass("hide");
            $(tabCon).eq(iIndex).siblings().removeClass("show").addClass("hide");
        });
    }

    //右侧条客服
	//$(".zxkf-con .zx-btn").on("click",function(){
	//	$(".fu-type").removeClass("hide");
	//	$(".mask-pop").css("z-index",1220);
	//});
	
	//$(".type-con li").on("click",function(){
	//	$(this).addClass("cur");
	//	$(this).siblings().removeClass("cur");
	//});
	
	$(".type-close").on("click",function(){
		$(".fu-type").addClass("hide");
		$(".mask-pop").css("z-index",1100);
	});
	
	$(".fwtj-btn").on("click",function(){
		$(".mask-pop,.zxkf-pop,.fu-type").addClass("hide");
		$(".mask-pop").css("z-index",1100);
	});

    //友情链接
	$(".f-link-tab li").mouseover(function(){
		var iIndex = $(this).index();
		$(this).addClass("cur");
		$(this).siblings().removeClass("cur");
		$(".f-link-con ul").eq(iIndex).removeClass("hide");
		$(".f-link-con ul").eq(iIndex).siblings().addClass("hide");
	});
	
});

//获取搜索联想数据
/*
* id 搜索框id
* search_Type 搜索类型（小区/二手房/租房）
* backId 联想框id
* */
function showHint(id,search_Type,backId){ }

//显示搜索联想
function ajaxK(action,searchType,keywords){
    $.get(action,{status:searchType,keywords:keywords},function(result){
        if(result.msg == ''){
            $(".search-menu").addClass("show").removeClass("hide");
            $(".search-menu").html(result.res);
        }else{
            return false;
        }
    },"JSON");
}

var login = userId;
if(login != '') {
	//右侧关注房源
	$.ajax({
		type: "GET",
		url:'/user/ajaxgetleftfocus',
		data:{},
		dataType:"html",
		success: function(data){
			$('.leftfocussale').html(data);
		}
			
	});
}



(function($,window,document,undefined){var $window=$(window);$.fn.lazyload=function(options){var elements=this;var $container;var settings={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"src",skip_invisible:true,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ZTQyYWViOS0xNmNjLTQ3NDItOGM2Ny03OTBjMGFmMDE3MDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRGOTY0NjdDOEVCMTFFN0EzMzhCODlGNDhEQjMyRTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRGOTY0NjZDOEVCMTFFN0EzMzhCODlGNDhEQjMyRTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkODY3OWQzOS04NzdkLTRiMmQtOTAxYS1lN2RiY2Y2MmUzY2UiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4NGRkZWNhZS03MTAyLTExZTctOTkyMi04ZDhjNTM5MGUyYzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47mmibAAAAEElEQVR42mL4//8/A0CAAQAI/AL+26JNFgAAAABJRU5ErkJggg=="};function update(){var counter=0;elements.each(function(){var $this=$(this);if(settings.skip_invisible&&!$this.is(":visible")){return}if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else{if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$this.trigger("appear");counter=0}else{if(++counter>settings.failure_limit){return false}}}})}if(options){if(undefined!==options.failurelimit){options.failure_limit=options.failurelimit;delete options.failurelimit}if(undefined!==options.effectspeed){options.effect_speed=options.effectspeed;delete options.effectspeed}$.extend(settings,options)}$container=(settings.container===undefined||settings.container===window)?$window:$(settings.container);if(0===settings.event.indexOf("scroll")){$container.bind(settings.event,function(){return update()})}this.each(function(){var self=this;var $self=$(self);self.loaded=false;if($self.attr("src")===undefined||$self.attr("src")===false){if($self.is("img")){$self.attr("src",settings.placeholder)}}$self.one("appear",function(){if(!this.loaded){if(settings.appear){var elements_left=elements.length;settings.appear.call(self,elements_left,settings)}$("<img />").bind("load",function(){var original=$self.attr("data-"+settings.data_attribute);$self.hide();if($self.is("img")){$self.attr("src",original)}else{$self.css("background-image","url('"+original+"')")}$self[settings.effect](settings.effect_speed);self.loaded=true;var temp=$.grep(elements,function(element){return !element.loaded});elements=$(temp);if(settings.load){var elements_left=elements.length;settings.load.call(self,elements_left,settings)}}).attr("src",$self.attr("data-"+settings.data_attribute))}});if(0!==settings.event.indexOf("scroll")){$self.bind(settings.event,function(){if(!self.loaded){$self.trigger("appear")}})}});$window.bind("resize",function(){update()});if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){$window.bind("pageshow",function(event){if(event.originalEvent&&event.originalEvent.persisted){elements.each(function(){$(this).trigger("appear")})}})}$(document).ready(function(){update()});return this};$.belowthefold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=(window.innerHeight?window.innerHeight:$window.height())+$window.scrollTop()}else{fold=$(settings.container).offset().top+$(settings.container).height()}return fold<=$(element).offset().top-settings.threshold};$.rightoffold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.width()+$window.scrollLeft()}else{fold=$(settings.container).offset().left+$(settings.container).width()}return fold<=$(element).offset().left-settings.threshold};$.abovethetop=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollTop()}else{fold=$(settings.container).offset().top}return fold>=$(element).offset().top+settings.threshold+$(element).height()};$.leftofbegin=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollLeft()}else{fold=$(settings.container).offset().left}return fold>=$(element).offset().left+settings.threshold+$(element).width()};$.inviewport=function(element,settings){return !$.rightoffold(element,settings)&&!$.leftofbegin(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings)};$.extend($.expr[":"],{"below-the-fold":function(a){return $.belowthefold(a,{threshold:0})},"above-the-top":function(a){return !$.belowthefold(a,{threshold:0})},"right-of-screen":function(a){return $.rightoffold(a,{threshold:0})},"left-of-screen":function(a){return !$.rightoffold(a,{threshold:0})},"in-viewport":function(a){return $.inviewport(a,{threshold:0})},"above-the-fold":function(a){return !$.belowthefold(a,{threshold:0})},"right-of-fold":function(a){return $.rightoffold(a,{threshold:0})},"left-of-fold":function(a){return !$.rightoffold(a,{threshold:0})}})})(jQuery,window,document);
