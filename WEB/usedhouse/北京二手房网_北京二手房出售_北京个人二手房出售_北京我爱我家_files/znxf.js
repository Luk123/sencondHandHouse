
$(function(){

//选中卡片
	$(".slide-con li").on("click",function(){		
		
		$(this).addClass("znxf-cur");
		$(this).siblings().removeClass("znxf-cur");		
		
	});
	
//卡片滚动

	jQuery(".slide-box").slide({
        mainCell:".slide-con ul",
        autoPage:true,
        effect:"left",
        autoPlay:false,
        vis:3,
        scroll:3,
        pnLoop:false,
        trigger:"click"
    });
	
//删除卡片
	$(".znxf-item .close").click(function(){
		
		$(this).parents("li").remove();
		
		var slideNum = $(".slide-con li").length;
		var slideW = $(".slide-con li").outerWidth();
		
		if( slideNum<=3 ){
			
			$(".slide-box .next").hide();		
			
		}else if(slideNum >=3){
			
			$(".slide-box .next").show();
			
		}		

	});
	
//点击编辑
	$(".znxf-item .edit").click(function(){


		$(this).parents(".znxf-box").addClass("hide");
		$(".znxf-xuanx-box").removeClass("hide");


	});
	
//点击保存
	$(".znxf-baocun").click(function(){
		
		$(this).parents(".znxf-box").addClass("hide");
		$(".znxf-ka").removeClass("hide");

	});

//编辑选项中的标签
	$(".zn-jg-label a").click(function(){
		
		if($(this).hasClass("cur")){

			$(this).removeClass("cur");
		}else{
			$(this).addClass("cur");
		}
		
		var tdArr   = [];
        var tdIdArr = [];
		var curTD= $(".zn-jg-label dd").find(".cur");
	
		$.each(curTD,function (i) {
	 		tdArr.push(curTD.eq(i).text());
            tdIdArr.push(curTD.eq(i).attr("attrId"));
	    });
		
		$("#td-val").val(tdArr);
        $("#tdId-val").val(tdIdArr);

	});
   
//选项卡

	tabCon(".zn-me-shq .me-tab li",".zn-dish-con","cur");
	tabCon(".quyu-tab span",".quyu-con","cur");
	tabCon(".zn-zj-tab li",".zn-zj-con","cur");	
	tabCon(".zn-mj-tab li",".zn-mj-con","cur");	
	

	function tabCon(tabNme,tabCon,classN){
		$(tabNme).click(function(){

			var iIndex = $(this).index();

			$(this).addClass(classN);
			$(this).siblings().removeClass(classN);

			$(tabCon).eq(iIndex).addClass("show").removeClass("hide");
			$(tabCon).eq(iIndex).siblings(tabCon).removeClass("show").addClass("hide");
		});	
	}

//下拉菜单

	$(".xuanxiang").on("click",function(){

		var xuanP = $(this).parent();
		
		$(this).addClass("xuan-cur");
		$(this).parent().siblings().children(".xuanxiang").removeClass("xuan-cur");

		if(xuanP.children(".znxf-menu").hasClass("hide")){

			xuanP.children(".znxf-menu").addClass("show").removeClass("hide");
			
		}else{

			xuanP.children(".znxf-menu").addClass("hide").removeClass("show");
		}

		xuanP.siblings().children(".znxf-menu").addClass("hide").removeClass("show");
		
	});

	$(document).on("click",function(){

		$(".znxf-menu").addClass("hide").removeClass("show");
	});	

	$(".znxf-list").on("click",function(e){

		if (e && e.preventDefault){

            e.preventDefault();
		}else{

            window.event.returnValue = false;
        }
        return false;
	});		

//下拉框选中内容价格

	$(".menu-price .radio").on("click",function(){
		
		var mTxt1 = $(this).children(".val1").text();
		var mTxt2 = $(this).children(".val2").text();
		
		if($(this).children().hasClass("val2")){
			
			
			$(this).parents(".znxf-menu").siblings(".xuanxiang").children().children(".neirong").text(mTxt1+"-"+mTxt2);
			$("#price-val").val(mTxt1+","+mTxt2);
		
		}else if($(this).children().hasClass("yishang")){
			
			$(this).parents(".znxf-menu").siblings(".xuanxiang").children().children(".neirong").text(mTxt1+"万以上");
			$("#price-val").val(mTxt1);
			
		}else if($(this).children().hasClass("yixia")){
			
			$(this).parents(".znxf-menu").siblings(".xuanxiang").children().children(".neirong").text(mTxt1+"万以下");
			$("#price-val").val(mTxt1);
		}
	});
	
//价格自定义
	
	$(".zdy-p-btn").on("click",function(){
		
		var zdyPVal = $(".zdy-p-val1").val();
		var zdyPVal2 = $(".zdy-p-val2").val();		
		
		$(this).parents(".znxf-menu").siblings(".xuanxiang").children().children(".neirong").text(zdyPVal+"-"+zdyPVal2);
		$("#price-val").val(zdyPVal+","+zdyPVal2);
	});
	
//下拉框选中面积

	$(".menu-mj .radio").on("click",function(){
		
		var mTxt1 = $(this).children(".val1").text();
		var mTxt2 = $(this).children(".val2").text();
		
		if($(this).children().hasClass("val2")){
			
			
			$(this).parents(".znxf-menu").siblings(".xuanxiang").children().children(".neirong").text(mTxt1+"-"+mTxt2);
			$("#mj-val").val(mTxt1+","+mTxt2);
		
		}else if($(this).children().hasClass("yishang")){
			
			$(this).parents(".znxf-menu").siblings(".xuanxiang").children().children(".neirong").text(mTxt1+"平以上");
			$("#mj-val").val(mTxt1);
			
		}else if($(this).children().hasClass("yixia")){
			
			$(this).parents(".znxf-menu").siblings(".xuanxiang").children().children(".neirong").text(mTxt1+"平以下");
			$("#mj-val").val(mTxt1);
		}
	});
	

//面积自定义	
	$(".zdy-m-btn").on("click",function(){
		
		var zdyMVal = $(".zdy-m-val1").val();
		var zdyMVal2 = $(".zdy-m-val2").val();
		
		$(this).parents(".znxf-menu").siblings(".xuanxiang").children().children(".neirong").text(zdyMVal+"-"+zdyMVal2);
		$("#mj-val").val(zdyMVal+","+zdyMVal2);
	});

//下拉框选中户型

	$(".menu-hx .check").on("click",function(){
				
		if($(this).hasClass("on_check")){
			
			$(this).removeClass("on_check");
		}else{
			$(this).addClass("on_check");
		}
		
		var hxAdd = [];
		var hxAddId = [];
		var acticveHX = $(".hux").find(".on_check");

		$.each(acticveHX,function (i) {

	 		hxAdd.push(acticveHX.eq(i).find(".val").text());
	 		hxAddId.push(acticveHX.eq(i).find(".val").attr("attrId"));
	
	    });

		$(this).parents(".znxf-menu").siblings(".xuanxiang").children().children(".neirong").text(hxAdd);
		$(this).parents(".znxf-menu").siblings(".xuanxiang").children().children(".neirong").attr("title",hxAdd);		
		
		$("#hx-val").val(hxAdd);
		$("#hxId-val").val(hxAddId);
		
	});
	
	

//下拉框选中内容 地铁
	
	$(".qu-dt-con li").on("click",function(){	//线路里的地铁站						
		
		if($(this).hasClass("buxian")){
									
			if($(this).hasClass("cur")){
			
				$(this).removeClass("cur");	
						
			}else{
				
				$(this).addClass("cur");
				$(this).siblings().removeClass("cur");

			}
			
			
		}else{
			
			if($(this).hasClass("cur")){
			
				$(this).removeClass("cur");	
						
			}else{
				
				$(this).addClass("cur");				
				$(this).parent().children(".buxian").removeClass("cur");
			}
		}
						
		var dtAdd = [];
		var dtAddId = [];
		var acticveDT = $(".qu-dt-con").find(".cur");
		
		$.each(acticveDT,function (i) {
			
			if($(this).text()=="不限"){
				
				var j = acticveDT.eq(i).find("span").attr("attrId-buxian");
				dtAdd.push($(".qu-dt li").eq(j).text());
				dtAddId.push(acticveDT.eq(i).find("span").attr("attrId-buxian"));
				
			}else{
				
				dtAdd.push(acticveDT.eq(i).find("span").text());
				dtAddId.push(acticveDT.eq(i).find("span").attr("attrId"));
			}
			
	
	    });
	    
	    $(".neirong1").text(dtAdd);
	    $(".neirong1").attr("title",dtAdd);		
		$("#dt-val").val(dtAdd);
		$("#dtId-val").val(dtAddId);
					
		var num = $(this).parent().attr("data-line");
		if($(this).parent().children().hasClass("cur")){
		
			$(".qu-dt li").eq(num).addClass("line-checked");						
		
		}else{				
			
	 		$(".qu-dt li").eq(num).removeClass("line-checked");
	 		$(".qu-dt li").eq(num).removeClass("cur2");
			
			//console.log(num)
			
		}
		
	});


	$(".qu-dt li").on("click",function(){	//地铁线路选择
		
		var iIndex = $(this).index();		

		$(".qu-dt-con").eq(iIndex).removeClass("hide");
		$(".qu-dt-con").eq(iIndex).siblings().addClass("hide");
		
		if($(this).hasClass("cur")){
			
			$(this).removeClass("cur");	
			
		}else{
			$(this).addClass("cur");
			$(this).siblings().removeClass("cur");
			
			if($(this).siblings().hasClass("line-checked")){			
				
				$(".line-checked").addClass("cur2");
			}else{
				
				$(this).siblings().removeClass("cur2");
			}
			
			if($(this).hasClass("cur2")){			
				
				$(this).addClass("cur");
			}
		
		}

	});	
	
//下拉框选中内容 商圈
	
	$(".qu-sq-con li").on("click",function(){	//商圈						
		
		if($(this).hasClass("buxian")){
									
			if($(this).hasClass("cur")){
			
				$(this).removeClass("cur");	
						
			}else{
				
				$(this).addClass("cur");
				$(this).siblings().removeClass("cur");

			}
			
			
		}else{
			
			if($(this).hasClass("cur")){
			
				$(this).removeClass("cur");	
						
			}else{
				
				$(this).addClass("cur");				
				$(this).parent().children(".buxian").removeClass("cur");
			}
		}
						
		var sqAdd = [];
		var sqAddId = [];
		var acticveSQ = $(".qu-sq-con").find(".cur");
		
		$.each(acticveSQ,function (i) {
			
			if($(this).text()=="不限"){
				
				var j = acticveSQ.eq(i).find("span").attr("attrId-buxian");
				sqAdd.push($(".qu-sq li").eq(j).text());
				sqAddId.push(acticveSQ.eq(i).find("span").attr("attrId-buxian"));
				
			}else{
				
				sqAdd.push(acticveSQ.eq(i).find("span").text());
				sqAddId.push(acticveSQ.eq(i).find("span").attr("attrId"));
			}
			
	
	    });
	    
	    $(".neirong2").text(sqAdd);
	    $(".neirong2").attr("title",sqAdd);		
		$("#qu-val").val(sqAdd);
		$("#quId-val").val(sqAddId);
					
		var num = $(this).parent().attr("data-sq");
		
		if($(this).parent().children().hasClass("cur")){
		
			$(".qu-sq li").eq(num).addClass("sq-checked");						
		
		}else{				
			
	 		$(".qu-sq li").eq(num).removeClass("sq-checked");
	 		$(".qu-sq li").eq(num).removeClass("cur2");
			
			//console.log(num)
			
		}
		
	});


	$(".qu-sq li").on("click",function(){	//商圈内容
		
		var iIndex = $(this).index();		

		$(".qu-sq-con").eq(iIndex).removeClass("hide");
		$(".qu-sq-con").eq(iIndex).siblings().addClass("hide");
		
		if($(this).hasClass("cur")){
			
			$(this).removeClass("cur");	
			
		}else{
			$(this).addClass("cur");
			$(this).siblings().removeClass("cur");
			
			if($(this).siblings().hasClass("sq-checked")){			
				
				$(".sq-checked").addClass("cur2");
			}else{
				
				$(this).siblings().removeClass("cur2");
			}
			
			if($(this).hasClass("cur2")){			
				
				$(this).addClass("cur");
			}
		
		}
		
	});		
	

	
	
//单选框样式

	$(".radio").on("click",function(){

		$(this).addClass("on_radio");
		$(this).siblings().removeClass("on_radio");
		
	});
	

//弹窗	
	var winH = $(document).height();
	
	$(".mask").height(winH);	

	$(".icon-add").on("click",function(){

		$("#step1").removeClass("hide");
		$(".mask").removeClass("hide");

		var popH = $(".pop-box").height();
		var popMT = (-popH/2)+"px";
		$(".pop-box").css("margin-top",popMT);

	});

	$(".close").on("click",function(){

		$(".pop-box").addClass("hide");
		$(".mask").addClass("hide");

	});

//下一步

	$("#step1 .step-btn").on("click",function(){
		step1();
		var mudiArr = [];
        var mudiIdArr = [];
		var labelCur = $("#step1 .label").find(".md");
	
		$.each(labelCur,function (i) {

	 		mudiArr.push(labelCur.eq(i).text());
            mudiIdArr.push(labelCur.eq(i).attr("id"));
	 			
	    });
		
		$("#mudi-val").val(mudiArr);
        $("#mudiId-val").val(mudiIdArr);
		//console.log($("#mudi-val").val());
				
	});
	
	$("#step1 .skip-btn").on("click",function(){
		
		step1();
		
		$(".label").children(".md-label").remove();
		
	});		
	
	$("#step2 .step-btn").on("click",function(){
		
		step2();
		
		var priceArr = [];
		var labelCur = $("#step2 .label").find(".r-price em");
	
		$.each(labelCur,function (i) {

	 		priceArr.push(labelCur.eq(i).text());
	 			
	    });
		
		$("#price-val").val(priceArr);
		//console.log($("#price-val").val());
	});
	
	$("#step2 .skip-btn").on("click",function(){
		
		step2();
		
		$(".label").children(".price-label").remove();
	});
	
	
	$("#step3 .step-btn").on("click",function(){
		
		step3();
		
		var hxArr = [];
        var hxIdArr = [];
		var labelCur = $("#step3 .label").find(".hx");
	
		$.each(labelCur,function (i) {

	 		hxArr.push(labelCur.eq(i).text());
            hxIdArr.push(labelCur.eq(i).attr("attrid"));
	 			
	    });
		
		$("#hx-val").val(hxArr);
        $("#hxId-val").val(hxIdArr);
	});
	
	$("#step3 .skip-btn").on("click",function(){
		
		step3();
		
		$(".label").children(".hx-label").remove();
	});
		
	$("#step4 .step-btn").on("click",function(){
		
		step4();
		
		var mjArr = [];
		var labelCur = $("#step4 .label").find(".r-mj em");
	
		$.each(labelCur,function (i) {

	 		mjArr.push(labelCur.eq(i).text());
	 			
	    });
		
		$("#mj-val").val(mjArr);
		//console.log($("#mj-val").val());
	});
	
	$("#step4 .skip-btn").on("click",function(){
		
		step4();
		
		$(".label").children(".mj-label").remove();
				
	});
		
	$("#step5 .step-btn").on("click",function(){
		
		step5();
		
		var quArr = [];
        var dtArr = [];
        var quIdArr = [];
        var dtIdArr = [];
		var labelquCur = $("#step5 .label").find(".qu");
        var labeldtCur = $("#step5 .label").find(".dt");
	
		$.each(labelquCur,function (i) {

	 		quArr.push(labelquCur.eq(i).text());
            quIdArr.push(labelquCur.eq(i).attr("attrid"));

	    });
        $.each(labeldtCur,function (i) {
            dtArr.push(labeldtCur.eq(i).text());
            dtIdArr.push(labeldtCur.eq(i).attr("attrid"));
        });
		
		$("#qu-val").val(quArr);
        $("#dt-val").val(dtArr);
        $("#quId-val").val(quIdArr);
        $("#dtId-val").val(dtIdArr);
		//console.log($("#qu-val").val());
		
	});
	
	$("#step5 .skip-btn").on("click",function(){
		
		step5();
		
		$(".label").children(".qu-label").remove();
		$(".label").children(".dt-label").remove();
	});
	
	
	$("#step6 .step-btn").on("click",function(){

		var tdArr   = [];
        var tdIdArr = [];
		var labelCur= $("#step6 .label").find(".td");
	
		$.each(labelCur,function (i) {
	 		tdArr.push(labelCur.eq(i).text());
            tdIdArr.push(labelCur.eq(i).attr("attrid"));
	    });
		
		$("#td-val").val(tdArr);
        $("#tdId-val").val(tdIdArr);
        ajaxSubmit();
	});

	function step1(){
			
		$("#step2").removeClass("hide");
		$("#step1").addClass("hide");

	 	$("#range-price").rangeSlider({    //滑块
	        defaultValues: {min: 200, max: 800},
	        bounds: {min: 0, max: 1000},
	        arrows:false,
	        step:10
	    });
	    $("#range-price .range-inner").text("W");

	    $("#range-price").bind("valuesChanging", function(e, data){		//移动滑块时，得到最小值和最大值

			if(data.values.max == 1000){

				$("#range-price .range-inner").eq(1).text('+W');
				$(".r-pmin").text("大于"+data.values.min);
				$(".r-pmax").text("");
				$(".r-price i").hide();

			}else{
				$("#range-price .range-inner").eq(1).text("W");
				$(".r-pmin").text(data.values.min);
				$(".r-pmax").text(data.values.max);
				$(".r-price i").show();
			}
		});

		$("#range-price").bind("valuesChanged", function(e, data){	//移动停止时，得到的最小值和最大值

			if($(".label span").hasClass("r-price")){

				$(".r-pmin").text(data.values.min);
				$(".r-pmax").text(data.values.max);

			}else{//将值添加到标签中

				$("<span class='r-price price-label'>"+"<em class='r-pmin'>"+data.values.min+"</em>"+"<i>—</i>"+"<em class='r-pmax'>"+data.values.max+"</em>万"+"</span>").appendTo(".label");
				
			}

			if(data.values.max == 1000){

				$("#range-price .range-inner").eq(1).text('+W');
				$(".r-pmin").text("大于"+data.values.min);
				$(".r-pmax").text("");
				$(".r-price i").hide();

			}else{
				$("#range-price .range-inner").eq(1).text("W");
				$(".r-pmin").text(data.values.min);
				$(".r-pmax").text(data.values.max);
				$(".r-price i").show();
			}

		});

		
	}
	
	function step2(){
		
		$("#step3").removeClass("hide");
		$("#step2").addClass("hide");
		
	}
	
	function step3(){
	
		$("#step4").removeClass("hide");
		$("#step3").addClass("hide");
		
		$("#range-mj").rangeSlider({
	        defaultValues: {min: 40, max: 160},
	        bounds: {min: 0, max: 200},
	        arrows:false,
	        step:10
	    });
	    $("#range-mj .range-inner").text("m²");

	    $("#range-mj").bind("valuesChanging", function(e, data){		//移动滑块时，得到最小值和最大值

			if(data.values.max == 200){

				$("#range-mj .range-inner").eq(1).text('+m²');
				$(".r-mmin").text("大于"+data.values.min);
				$(".r-mmax").text("");
				$(".r-mj i").hide();
			}else{
				$("#range-mj .range-inner").eq(1).text("m²");
				$(".r-mmax").text(data.values.max);
				$(".r-mj i").show();
			}
		});

	    $("#range-mj").bind("valuesChanged", function(e, data){	//移动停止时，得到的最小值和最大值

		  //console.log("Values just changed. min: " + data.values.min + " max: " + data.values.max);

			if($(".label span").hasClass("r-mj")){

				$(".r-mmin").text(data.values.min);
				$(".r-mmax").text(data.values.max);

			}else{

				$("<span class='r-mj mj-label'>"+"<em class='r-mmin'>"+data.values.min+"</em>"+"<i>—</i>"+"<em class='r-mmax'>"+data.values.max+"</em>m²"+"</span>").appendTo(".label");
			}

			if(data.values.max == 200){

				$("#range-mj .range-inner").eq(1).text('+m²');
				$(".r-mmin").text("大于"+data.values.min);
				$(".r-mmax").text("");
				$(".r-mj i").hide();
			}else{
				$("#range-mj .range-inner").eq(1).text("m²");
				$(".r-mmax").text(data.values.max);
				$(".r-mj i").show();
			}

		});
	}
	
	function step4(){
		
		$("#step5").removeClass("hide");
		$("#step4").addClass("hide");
	}
	
	function step5(){
		
		$("#step6").removeClass("hide");
		$("#step5").addClass("hide");
	}
	
/*	function step6(){
		
		$("#step6").addClass("hide");
		$(".mask").addClass("hide");
	}*/
			    
		    
	$(".pop-mudi li").on("click",function(){
		
		var txt = $(this).children("h4").text();
		var iIndex = $(this).index()+1;
        var arrtId = $(this).attr("id");
		

		if($(this).hasClass("cur")){
			
			$(this).removeClass("cur");				
			
			$(".label").children(".mudi"+iIndex).remove();	
			
		}else{
			
			$(this).addClass("cur");
			$("<span class="+"mudi"+iIndex+">"+"<em class='md' id="+arrtId+">"+txt+"</em>"+"</span>").appendTo(".label");
			$(".mudi"+iIndex).addClass("md-label");
		}
		
						
	});
		
	sel("#step3 .select-list span","huxing","hx","hx-label");
	sel("#step5 .select-qu span","qu","qu","qu-label");
	sel("#step5 .select-dt span","dt","dt","dt-label");
	sel("#step6 .select-list span","td","td","td-label");
	
	function sel(selName,className,eClass,lClass){

		$(selName).on("click",function(){
			
			var txt = $(this).text();
			var iIndex = $(this).index()+1;
            var attrId = $(this).attr("attrId");
	
			if($(this).hasClass("cur")){
				
				$(this).removeClass("cur");				
				
				$(".label").children("."+className+iIndex).remove();	
				
			}else{
				
				$(this).addClass("cur");
				$("<span class="+className+iIndex+">"+"<em class="+eClass+" attrId="+attrId+">"+txt+"</em>"+"</span>").appendTo(".label");
				$("."+className+iIndex).addClass(lClass);
			}		
					
		});	
	}
    function ajaxSubmit(){

        var mudi = $("#mudi-val").val();
        var mudiId = $("#mudiId-val").val();
        var price = $("#price-val").val();
        var bedRoom = $("#hx-val").val();
        var bedRoomId = $("#hxId-val").val();
        var area = $("#mj-val").val();
        var district = $("#qu-val").val();
        var districtId = $("#quId-val").val();
        var line = $("#dt-val").val();
        var lineId = $("#dtId-val").val();
        var tag = $("#td-val").val();
        var tagId = $("#tdId-val").val();
        var data = {
            type:'sale',
            mudi:mudi,
            mudiId:mudiId,
            price:price,
            bedRoom:bedRoom,
            bedRoomId:bedRoomId,
            area:area,
            district:district,
            districtId:districtId,
            line:line,
            lineId:lineId,
            tag:tag,
            tagId:tagId
        };
        $.post('/smart/ajaxsmart',data,function(result){
            var listStr = ''
            var flag=/,/g;

            if(result.msg == ''){
                $.each(result.data, function(i,val){
                    listStr+= '<li><div class="listImg"><a href="/sale/'+val.housesid+'.html" target="_blank">' +
                        '<img src="'+val.imgurl+'"></a></div>' +
                        '<div class="listCon">' +
                        '<div class="listTit"><a href="/sale/'+val.housesid+'.html" target="_blank">'+val.communityname+'</a></div>' +
                        '<div class="listX">' +
                        '<!-- <p><i class="i_01"></i>4室2厅· 192.67平米· 南北 ·中层/11层 ·精装</p> -->' +
                        '<p><i class="i_01"></i>'+val.housetitle+'</p>' +
                        '<p><i class="i_02"></i><a href="#">'+val.qyname+' '+val.communityname+'</a> · '+val.sqname+' · 地铁10号线</p>' +
                        '<p><i class="i_03"></i>118人关注 · 共98次带看 · 2个月以前发布</p>' +
                        '<div class="jia">' +
                        '<p class="redC"><strong>'+val.price+'</strong>万</p>' +
                        '<p>单价'+val.unitprice+'元/㎡</p>' +
                        '</div></div><div class="listTag"><span>北京南站</span><span>随时看房</span><span>房本五年</span><span>物美价廉</span></div></div>' +
                        '</li>"';
                })
                $(".total-box span").text(result.count);
                $("#step6").addClass("hide");//关闭弹窗
                $(".mask").addClass("hide");

                $(".znxf-ka").addClass("hide");//隐藏卡片
                $(".znxf-xuanx-box").removeClass("hide");//展示新卡片

                $("#totalPrice").text(price.replace(flag,'-'));
                $("#area").text(area.replace(flag,'-'));
                $("#bedRoom").text(bedRoom.replace(flag,'-'));
                $("#line").text(line);
                $("#district").text(district);


                $(".pList").html(listStr);
            }
        },"json");
    }

//编辑条件开始找房
    $(".znxf-btn").on("click",function(){
        ajaxSubmit();
    });

//更多
		
	$(".more").on("click",function(){

		if($(".more-con").hasClass("hide")){

			$(".more-con").addClass("show").removeClass("hide");
			$(".icon-more").addClass("down").removeClass("up");
			$(".more span").text("收起");

		}else if($(".more-con").hasClass("show")){

			$(".more-con").addClass("hide").removeClass("show");
			$(".icon-more").addClass("up").removeClass("down");
			$(".more span").text("更多");
		}
		

	});
});