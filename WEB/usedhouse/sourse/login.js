$(function(){
	//登录注册
	var verifyCode = new GVerify("v_container");
	/*统一配置路径*/
	var basePath='';
	$('#v_container').click(function(){
		var res = verifyCode.validate(document.getElementById("code_input").value);

		if(res){
			//登录成功
			$('.myhide').hide()
		}else{
			$('#code_input').val("验证码错误");
		}
	})
/*注册*/
    $("#regist_button").click(function(){
        var username=$("#uname_r").val();
        var userpwd=$("#upwd_r").val();
        var user = {
            "userName":username,
            "pwd":userpwd
        };
        $.ajax({
            type:"post",
            url : basePath + "user/createUser",
            data:JSON.stringify(user),
            dataType : "json",
            contentType : "application/json",
            beforeSend: function(xhr){
                xhr.setRequestHeader('Content-Type', 'application/json');
            },
            success:function(result){
                if($.isFunction(registSuccess)){
                    registSuccess(result);
                }
            },
            error:function(data){
                registError(data)
			}
        });

    });
    /***
     * 注册成功
     * @param result
     */
    function registSuccess(result){
        if(result.success && result.result>0){
            alert("注册成功");
            $('.lg').show()
            $('.zc').hide()
        }else{
            alert("注册失败");
        }
    }

    function registError(data){
        alert(data);
    }

    /*登录*/

    //登录
    $("#login_button").click(function(){
        var loginUserName = $(".uname").val();
        var loginPassword = $(".upwd").val();
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
    /**
     * 登录成功
     * @param result
     */
    function loginSuccess(result){
        if(result.success && result.result!=null){
            //用户名：用户id存cookie
            addCookie(cookie_key,result.result.userId,2);
            addCookie(UserName,result.result.userName,2);
            window.location.href="index.html";
        }else{
            alert("登录失败");
        }
    }

    function loginError(){
        alert("登录异常");
    }

})