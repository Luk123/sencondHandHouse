function  login() {
    var loginUserName = $("#count").val();
    var loginPassword = $("#password").val();
    if (loginUserName!="admin"){
        alert("您没有权限登陆！")
        return;
    }
    var token = "";
    var userId="";
    //请求
    jQuery.support.cors = true;
    $.ajax({
        type:"post",
        url: basePath+"user/login",
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
        },
        success:function(result){
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
}

/**
 * 登录成功
 * @param result
 */
function loginSuccess(result){
    if(result.success && result.result!=null){
        //用户名：用户id存cookie
        location.href="MS/index.html";
    }else{
        alert("登录失败");
    }

}

function loginError(){
    alert("登录异常");
}