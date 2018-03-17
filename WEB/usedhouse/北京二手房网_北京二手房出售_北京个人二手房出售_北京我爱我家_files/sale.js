$(function(){
	///点击展开更多条件
	$(".moreBtn span").click(function(){
		if($(".moreCon").hasClass("hide")){
            $.cookie('morCon','open');
            $(".moreCon").removeClass("hide").addClass("block")
			$(this).html("收起<i class='mBg'></i>")
			$(this).children("i").addClass("iCur");
		} else{
            $.cookie('morCon',null);
			$(".moreCon").removeClass("block").addClass("hide")
			$(this).html("更多<i class='mBg'></i>")
			$(this).children("i").removeClass("iCur");
		}
	});
    $('.xiao').on('click', function(){
        url = "http://" + window.location.host + window.location.pathname;
        window.location.href=url
    });
    //条件清空按钮
    $(".qkBtn").click(function(){
        $(".tj span").remove();
    });
	//大图模式偶数个无margin
	$(".big-pic li:odd").addClass("no-margin-r");

    var c_pathname=window.location.pathname;
    if((/c[1-3]/.test(c_pathname)) || (/f[1-5]/.test(c_pathname)) || (/y[1-5]/.test(c_pathname)) || (/z[1-3]/.test(c_pathname)) || (/t[1-9]/.test(c_pathname)) ) {
        $.cookie('morCon','open');
    }
    if($.cookie('morCon')=='open'){
        $('.moreCon').removeClass('hide');
        $('.moreCon').addClass('block');
        $('.moreBtn').children('span').html('收起<i class="mBg iCur"></i>');
    }
//    console.log($.cookie('morCon'));
});

$('#priceTop, #priceLow').on('focus', function(){
    $('#priceUnit').html('万元');
});
$('#areaTop, #areaLow').on('focus', function(){
    $('#areaUnit').html('㎡');
});

/**
 * 自定义面积
 * 判断输入面积是否合格，合格则拼接链接跳转
 */
function customArea () {
    var areaLow = parseInt($("#areaLow").val());
    var areaTop = parseInt($("#areaTop").val());

    if (!(/^\d+$/.test(areaLow)) && !(/^\d+$/.test(areaTop))) {
        $("#areaLow").val('');
        $("#areaTop").val('');
        openPop('只能输入数字, 且不能为空', '', '1');
        return false; 
    }

    if ((/^\d+$/.test(areaLow)) && (/^\d+$/.test(areaTop))) {
        if(areaLow <= areaTop) {
            var area = 'h' + areaTop + 'l' + areaLow;
            var url = clearPriceCondition(area, 'area');
        } else {
            $("#areaLow").val('');
            $("#areaTop").val('');
            openPop('请输入正确的范围', '',  '1');
            return false; 
        }
    } else if (/^\d+$/.test(areaLow)) {
        var area = 'h999' +'l' + areaLow;
        var url = clearPriceCondition(area, 'area');
    } else if(/^\d+$/.test(areaTop)) {
        var area = 'h' + areaTop + 'l0';
        var url = clearPriceCondition(area, 'area');
    }
    window.location.href = url;
}

//拼筛选条件，去掉价格相关筛选条件，并加上自定义价格
function clearPriceCondition(custom, type) {
    //拼装自定义价格跳转的链接
    var url = '/' + urlAction;//拼控制器
    //拼区域或商圈
    if (urlLocation.length > 0) {
        url += '/' + urlLocation;
    }

    if (urlCondition.length > 0) {
        url += '/' + urlCondition;
        if(type == 'price') {
            url = url.replace(/p\d/g, "");
            url = url.replace(/b\d+/g, "");//自定义价格
            url = url.replace(/e\d+/g, "");
        } else {
            url = url.replace(/a\d/g, "");
            url = url.replace(/l\d+/g, "");//自定义面积
            url = url.replace(/h\d+/g, "");
        }
        url += custom;
    } else {
        url += '/' + custom;
    }
    if (urlKeywords.length > 0) {//拼关键字
        url += '/_' + urlKeywords;
    }
    if (isImage.length > 0) {//拼接大图标识
        url += isImage;
    }
    return  url;
}

/**
 * 自定义价格
 * 1 只输入左侧 大于该条件 
 * 2 只输入右侧 小于该条件 
 * 3 左侧小于右侧
 * 4 左侧等于右侧
 * 5 左侧大于右侧 清空
 */
function customPrice() {
    var priceLow = parseInt($("#priceLow").val());
    var priceTop = parseInt($("#priceTop").val());

    if (!(/^\d+$/.test(priceLow)) && !(/^\d+$/.test(priceTop))) {
        $("#priceLow").val('');
        $("#priceTop").val('');
        openPop('只能输入数字, 且不能为空', '', '1');
        return false;
    }

    if ((/^\d+$/.test(priceLow)) && (/^\d+$/.test(priceTop))) {
        if (priceLow <= priceTop) {
            var price = 'b' + priceLow + 'e' + priceTop;
            var url = clearPriceCondition(price, 'price');
        } else {
            $("#priceLow").val('');
            $("#priceTop").val('');
            openPop('请输入正确的范围', '', '1');
            return false;
        }
    } else if (/^\d+$/.test(priceLow)) {
        var price = 'b' + priceLow + 'e999999';
        var url = clearPriceCondition(price, 'price');
    } else {
        var price = 'b0' + 'e' + priceTop;
        var url = clearPriceCondition(price, 'price');
    }
    window.location.href = url;
}





/**
* 清空条件跳转
*/
function cleanSelect () {
    window.location.href = '/ershoufang/';
}
//搜索联想
showHint("ershoufang","ershoufang","saleSearch");

//判断用户是否登录
function checklogin(){
	var login = userId ;
	if(login == '') {
		//if(confirm("注册用户才能查看此信息哦！现在登录？")){
            window.location = '/reglogin/index?preUrl='+preUrl;
			return false;
		//}
	} else {
		return true;
	}
}

//用户保存的搜索条件
var hasAlreadyDone = 'no'; 
function saveCondition() {
	//ajax限制当前操作没有完成,反复点击时不会继续执行再执行Ajax
    if(hasAlreadyDone == 'yes') {
        return false;
    }
	if(!checklogin()) {
		return false;
	}
	if(saveconditions == '') {
        openPop('没有选择保存条件！', '',  '1');
		return false;
	}
	$.ajax({
		type : "post",
		url : "/user/ajaxsavecondition",
		dataType : 'json',
		data : {'content':saveconditions, 'url':saveconditionsurl, 'type':type, 'cityid':companysid},
		success : function (data) {
			if (data.code == 200) {
                openPop('保存成功！', '',  '1');
                $(".save-box").removeClass("no-save");
                $(".save-box>a").attr('href', '/user/search');
            } else {
                openPop(data.message, '',  '1');
            }
		},
        complete: function () {
			hasAlreadyDone = 'no';
        }
	});
}
