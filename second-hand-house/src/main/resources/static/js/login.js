$(function(){
	//登录
	$("#login").click(function(){
		var loginUserName = $("#count").val();
		var loginPassword = $("#password").val();
		var token = "";
		var userId="";
		//请求
		jQuery.support.cors = true;
		$.ajax({
			type:"post",
			url:basePath + "user/login",
			dataType : "json",
			beforeSend: function(xhr){
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.setRequestHeader('Authorization',"Basic "+ loginUserName+":"+loginPassword);
			},
			complete : function(xhr, TS){
				token = xhr.getResponseHeader("Authorization");
				var tk = token.split(" ");
				if(tk[1] != null){
					token = "Basic "+loginUserName+":"+tk[1];
				}
				addCookie(userId+"_token",token,2);
			},
			success:function(result){
				//token 存cookie，2小时有效时间
				if(result.success && result.result!=null){
					userId = result.result.userId;
				}else{
					alert(result.message);
					return;
				}
				
				if($.isFunction(loginSuccess)){
					loginSuccess(result);
				}
			},
			error:loginError
		});
	});
	
	//注册
	$("#regist_button").click(function(){
		var username=$("#userName").val();
		var user = {
				"userName":username,
				"pwd":$("#regist_password").val(),
            	"certNo":$("#certNo").val(),
				"contactWay":$("#contactWay").val(),
            	"sex":$("#sex").val(),
            	"birth":$("#birth").val(),
            	"addr":$("#addr").val(),
                "account":$("#account").val()
				};
		$.ajax({
			type:"post",
			url : basePath + "user/createUser",
			data:JSON.stringify(user),
			dataType : "json",
			contentType : "application/json",
			beforeSend: function(xhr){
				xhr.setRequestHeader('Content-Type', 'application/json');
				//xhr.setRequestHeader('Authorization', token);
				return checkUserName(username);
			},
			success:function(result){
				if($.isFunction(registSuccess)){
					registSuccess(result);
				}
			},
			error:registError
		});
		
	});
	
	//登出
	$("#logout").click(function(){
		logout();
	});
	

	
});


/***
 * 判断用户名是否重复
 * @param username
 * @returns {Boolean}
 */
function checkUserName(username){
	var b = false;
	$.ajax({//提交之前验证用户名是否重复
		type:"post",
		async:false,
		url: basePath + "user/checkUserName",
		data:JSON.stringify({"userName":username}),
		dataType : "json",
		contentType : "application/json",
		beforeSend: function(xhr){xhr.setRequestHeader('Content-Type', 'application/json');},
		success: function(result){
	        if(result.success && result.result!=null){
	        	$("#warning_1").show();
	        	b= false;
	        }else{
	        	b=true;
	        }
        },
        error:function(){
        	b=false;
        }
	});
	return b;
};

/**
 * 退出登录
 */
function logout(){
	var userId = getCookie("username");
	delCookie("username");//删除用户cookie
	delCookie(userId+"_token");//删除token
	location.href="register_login.html";
}





/**
 * 登录成功
 * @param result
 */
function loginSuccess(result){
    if(result.success && result.result!=null){
        //用户名：用户id存cookie
        addCookie(cookie_key,result.result.userId,2);
        addCookie(UserName,result.result.userName,2);
        location.href="https://email.yuntongauto.com/";
    }else{
        alert("登录失败");
    }

}

function loginError(){
    alert("登录异常");
}


/***
 * 注册成功
 * @param result
 */
function registSuccess(result){
    if(result.success && result.result>0){
        alert("注册成功");
        $('#dl').hide();
        $('#zc').show();
    }else{
        alert("注册失败");
    }
}

function registError(){
    alert("注册异常");
}






