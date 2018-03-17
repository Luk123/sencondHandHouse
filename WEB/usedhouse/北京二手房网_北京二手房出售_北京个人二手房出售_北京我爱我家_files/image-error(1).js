/**
 * 调用该文件前，请先定义文件基本路径baseUrl
 * baseUrl用RESOURCES 资源域名
 */
function defaultImgErrorCommunity(obj) {//小区列表页404图片
    obj.onerror = "";
    obj.src = baseUrl+"/pc/common/images/communityList404.jpg";
    obj.onerror=null;
}
function houserecommendimgerror(obj) {//二手房、租房列表页404图片
    obj.onerror = "";
    obj.src = baseUrl+"/pc/common/images/houseRecommend404.jpg";
    obj.onerror=null;
    obj.jqimg = '';
}
function houseimgerror(obj) {//二手房、租房列表页404图片
    obj.onerror = "";
    obj.src = baseUrl+"/pc/common/images/houseList404.jpg";
    obj.onerror=null;
    obj.jqimg = '';
}
function brokerError(obj) {//经纪人列表页404图片
    obj.onerror = "";
    obj.src = baseUrl+"/pc/common/images/brokerList404.jpg";
    obj.onerror=null;
}
function fe(obj) {//经纪人列表页微信图片
    obj.parentNode.parentNode.removeChild(obj.parentNode);
}
function detailqrerror(obj) {//房源详情页微信无二维码
    obj.parentNode.parentNode.removeChild(obj.parentNode.parentNode.getElementsByClassName('sharebtn')[0]);
    obj.parentNode.parentNode.removeChild(obj.parentNode);
}
function qrcodeerror(obj) {//经纪人详情页微信无二维码
	obj.parentNode.parentNode.className = "agent-wx weixin-no fl";
	obj.parentNode.parentNode.removeChild(obj.parentNode);	
}
function brokerwxerror(obj) {//经纪人详情页微信无二维码
    obj.parentNode.parentNode.className = "weixin-no";
    obj.parentNode.parentNode.removeChild(obj.parentNode);
}
function housedetailerror(obj) {//房源，小区详情页404图片
    obj.onerror = "";
    obj.src = baseUrl+"/pc/common/images/communityDetail404.jpg";
    obj.onerror=null;
}
function newhouseserror(obj) {//首页新房404图片
    obj.onerror = "";
    //$(obj).siblings(".info").html("");
    obj.parentNode.getElementsByClassName('info')[0].innerHTML="";
    obj.src = baseUrl+"/pc/common/images/newhouse404.jpg";
    obj.onerror=null;
}
function recommandserror(obj) {//房源，小区详情页推荐房源，周边小区404图片
    obj.onerror = "";
    obj.src = baseUrl+"/pc/common/images/recommands404.jpg";
    obj.onerror=null;
}

//有好房推荐小区 无图时的默认图片
function defaultGoodHouseChooseError(obj){
    obj.onerror = "";
    obj.src = baseUrl+"/pc/common/images/goodHouseChooseList404.jpg";
    obj.onerror=null;
}

//有好房专题 无图时的默认图片
function defaultGoodHouseIndex(obj) {
    obj.onerror = "";
    obj.src = baseUrl + "/pc/common/images/default_detail_404.png";
    obj.onerror=null;
}

//知识列表 无图时的默认图片
function defaultZhiShiError(obj){
    obj.onerror = "";
    obj.src = baseUrl+"/pc/common/images/default_zhishi_404.png";
    obj.onerror=null;
}

//小区测评列表页 无图时的默认图片
function defaultCePingError(obj){
    obj.onerror = "";
    obj.src = baseUrl+"/pc/common/images/default_ceping_404.jpg";
    obj.onerror=null;
}


/*
function bigimgerror(obj) {
    obj.onerror = "";
    obj.src = baseUrl+"/files/common/images/error/default_big.jpg";
    obj.onerror=null;
}
function ncexchangeimgerror(obj) {
    obj.onerror = "";
    obj.src = baseUrl+"/files/common/images/error/default_ncexchange.png";
    obj.onerror=null;
}
function ncrentimgerror(obj) {
    obj.onerror = "";
    obj.src = baseUrl+"/files/common/images/error/default_ncrent.jpg";
    obj.onerror=null;
}
function nccommunityimgerror(obj) {
    obj.onerror = "";
    obj.src = baseUrl+"/files/common/images/error/default_nccommunity.jpg";
    obj.onerror=null;
}
function middleimgerror(obj) {
    obj.onerror = "";
    obj.src = baseUrl+"/files/common/images/error/default_big.jpg";
    obj.onerror=null;
}
function middlecommunityimgerror(obj) {
    obj.onerror = "";
    obj.src = baseUrl+"/files/common/images/error/default_big1.jpg";
    obj.onerror=null;
}

function middlecommunityimgerrorbig(obj,errorimgurl) {
    obj.onerror = "";
    if(errorimgurl == undefined){
    	obj.src = baseUrl+"/files/common/images/error/default_big1.jpg";
    }else{
    	obj.src = "http://image.5i5j.com/picture/"+errorimgurl;
    }
    obj.onerror=null;
}

function smallimgerror(obj) {
    obj.onerror = "";
    obj.src = baseUrl+"/files/common/images/error/default_small.jpg";
    obj.onerror=null;
}
function lookNotesErrot(obj){
	obj.onerror = "";
    obj.src = baseUrl+"/files/common/images/error/lookNotes.jpg";
    obj.onerror=null;
}
function weixinImageError(obj) {
    obj.onerror = "";
    obj.src = baseUrl+"/files/common/images/error/broker.jpg";
    obj.onerror=null;
    $(obj).parent().parent().find(".broker-wx-icon").html('&nbsp;<img width="22" height="22" src="/themes/new2015/bj/files/common/images/weixin-hui.jpg">');
    $(obj).parent().parent().find(".broker-wx-icon").removeClass('broker-wx-icon');
}
function weixinListImageError(obj) {
    obj.onerror = "";
    obj.src = baseUrl+"/files/common/images/error/broker.jpg";
    $(obj).parent().parent().find(".broker-weixin").attr('src', baseUrl+'/files/common/images/weixin-hui.jpg');
    $(obj).parent().parent().find(".broker-weixin").removeClass('broker-weixin');
    obj.onerror=null;
}
function weixin(obj){
	obj.onload = "";
	if ($('.code2 p img').attr('src') != baseUrl+"/files/common/images/error/broker.jpg"){
		document.getElementById('weixin').className = 'weixin';
	}
}
*/
