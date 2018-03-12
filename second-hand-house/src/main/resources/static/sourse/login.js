$(function(){
	//登录注册
	var verifyCode = new GVerify("v_container");

	$('#v_container').click(function(){
        imgCode();
	});
	/*二维码*/
	function imgCode(){
        var res = verifyCode.validate(document.getElementById("code_input").value);
        if(res){
            return true
        }else{
            $('#code_input').val("验证码错误");
            return false;
        }
    }
/*注册*/
    $("#regist_button").click(function(){

        var inputs=$('.zc').find('input');
        var flag;
        for(var i=0;i<=inputs.length-1;i++){
            flag=isNull(inputs.eq(i).attr('id'));
            if(!flag){
                return null;
            }
        }
        if(!imgCode()){
            alert('验证码错误')
            return null;
        }
        var username=$("#uname").val();
        var userpwd=$("#upwd").val();
        var uid=$("#uid").val();
        var ulastname=$("#ulastname").val();
        var ucall=$("#ucall").val();
        var user = {
            "userName":ulastname,
            "pwd":userpwd,
            "certNo":uid,
            "contactWay":ucall,
            "sex":'',
            "birth":'',
            "addr":'',
            "account":username
        };
        jQuery.support.cors = true;
        $.ajax({
            type:"post",
            url :"http://localhost:8088/user/createUser",
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
		console.log(data)
        alert(data);
    }

    /*登录*/
    //登录
    $("#login_button").click(function(){
        var loginUserName = $(".uname").val();
        var loginPassword = $(".upwd").val();
        var token = "";
        var userId="";
        var inputs=$('.lg').find('input');
        var flag;
        for(var i=0;i<=inputs.length-1;i++){
            flag=isNull(inputs.eq(i).attr('id'));
            if(!flag){
                return null;
            }
        }
        //请求
        jQuery.support.cors = true;
        $.ajax({
            type:"post",
            url:"http://localhost:8088/user/login",
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

    function isNull(objName){
        var key=$('#'+objName).val();
        if(key=='' || !key || key==null){
            switch (objName){
                case  'uname_l':
                    alert('账号名不能为空');
                    break;
                case  'uname' :
                    alert('请输入账号名');
                    break;
                case  'upwd_l' || 'upwd':
                    alert('密码不能为空');
                    break;
                case  'upwd':
                    alert('请输入密码');
                    break;
                case  'uid' :
                    alert('请输入密码身份证');
                    break;
                case 'ulastname':
                    alert('请输入真实姓名');
                    break;
                case 'ucall':
                    alert('手机号不能为空');
                    break;
            }
            return false;
        }else{
            return true;
        }

    }
})