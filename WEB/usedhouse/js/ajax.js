/*jquery ajax辅助库*/

function ajax_sup(url,app_id,type,data,single)
{
	var result;
	/*参数获取并转换为String类型*/
	var connect_url  = url.toString();/*连接url*/
	var connect_id   = app_id.toString();/*appid*/
	var connect_type = type.toString();/*连接方式   如 post get header delete */
	var connect_data =JSON.stringify(data);
	
	if(single)
	{
		
		connect_data=data;
		
	}
	/*调用第三方接口进行数据的获取*/
	$.ajax({
		  		type:connect_type,
		  		url:connect_url,
		  		
		  		async:false,
		  		beforeSend:function(xhr)
		  		{
		  			 xhr.setRequestHeader("appId", connect_id);
		  			 xhr.setRequestHeader("Content-Type", "application/json");
		  			 if(getCookie('token')!=null||getCookie('token')!="")
		  			 xhr.setRequestHeader("author",getCookie('token'));
		  		},
		  		dataType:"json",
		  		data:connect_data,
		  		success:function(key)
		  		{
		  			/*在此处书写登录成功后的逻辑*/
		  			 
		            result=key;
		  		},
		  		error:function(key)
		  		{
		  		   /*登录失败的处理方式*/
		  		 
		  		 
		  		}
		  	});
		  	return result;
}
