<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<script type="text/javascript" src="./lib/jquery/1.9.1/jquery.min.js"></script>
<!-- 以下是方法一所需要引入的js
<link type="text/css" href="./lib/laypage/1.2/skin/laypage.css">
<script type="text/javascript" src="./lib/laypage/1.2/laypage.js"></script>
<script type="text/javascript" src="./js/core.js"></script> 
 -->
<!-- 以下是方法二所需要引入的js -->
<link type="text/css" href="./lib/layui-v2.0.2/css/layui.css" rel="stylesheet">
<script type="text/javascript" src="./lib/layui-v2.0.2/layui.all.js"></script>

</head>
<body>
	<table class="layui-table" style="width: 800px">
	  <thead>
	    <tr>
	      <th>ID</th>
		  <th>用户名</th>
		  <th>密码</th>
		  <th>电话</th>
		  <th>地址</th>
		  <th>分数</th>
		  <th>操作</th>
	    </tr>
	  </thead>
	  <tbody id="tbody">

	  </tbody>
	</table>
	<div id="page1"></div>
</body>
<script type="text/javascript">
$(function(){
	//方法一直接使用独立的laypage插件，具体分页实现请看core.js里面，缺点：不好自定义颜色样式
	//core.getUserListByPage();
}); 

//方法二则直接使用layui-v2.0.2里面的分页功能，没有用到core.js里面的方法
layui.use('laypage', function(){
  var laypage = layui.laypage;
  var url = "http://localhost:8080/laypageDemo/user/list";
  var config = {page:1,pageSize:4};
  $.getJSON(url,config,function(res){
	  laypage.render({
		    elem: 'page1',
		    count: res.total, //总条数
		    limit:config.pageSize, //每页条数
		    //theme: '#FFB800', //自定义颜色
		    jump: function(obj, first){
		        if(!first){ //首次则不进入
		        	config.page = obj.curr;
		        	getUserListByPage(url,config);
		        }
		    }
	   });
	  parseUserList(res,config.page);  
  }); 

});
//点击页数从后台获取数据
function getUserListByPage(url,config){
	$.getJSON(url,config,function(res){
		parseUserList(res,config.page);
	});
}

//解析数据，currPage参数为预留参数，当删除一行刷新列表时，可以记住当前页而不至于显示到首页去
function parseUserList(res,currPage){
	var content = "";
	$.each(res.rows, function (i, o) {
		content += "<tr>";
		content += "<td>"+o.id+"</td>";
		content += "<td>"+o.username+"</td>";
		content += "<td>"+o.password+"</td>";
		content += "<td>"+o.phone+"</td>";
		content += "<td>"+o.address+"</td>";
		content += "<td>"+o.score+"</td>";
		content += "<td><a>删除</a></td>";
		content += "</tr>";
	});
	$('#tbody').html(content);
}

</script>
</html>