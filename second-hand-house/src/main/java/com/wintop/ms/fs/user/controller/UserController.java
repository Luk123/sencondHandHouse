package com.wintop.ms.fs.user.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.user.bo.UserLoginQO;
import com.wintop.ms.fs.user.entity.User;
import com.wintop.ms.fs.user.service.UserManager;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

/**
 * 用户Controller。
 */
@RestController
public class UserController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(UserController.class);

    @Resource
    private UserManager userManager;

    @PostMapping(value = "/user/login")
    public ServiceResult<User> login(HttpServletRequest request, HttpServletResponse response){
        ServiceResult<User> result=new ServiceResult<>();
        String auth = request.getHeader("Authorization");
        if(StringUtils.isNotEmpty(auth)){
            String auths[] = auth.split(" ");
            if(auths.length == 2){
                String dec[] = auths[1].split(":");
                if(dec.length == 2){
                    Map<String,Object> map=new HashMap<>();
                    map.put("userName",dec[0]);
                    map.put("pwd",dec[1]);
                    result=userManager.selectByUserNameAndPw(map);
                }
            }
        }
            // 设置用户请求token
            String tk =new Random().nextInt(62)+"";
            request.getSession().setAttribute("userToken", tk);
            // 设置返回到客户端的header的token值
            response.setHeader("Authorization", "Token "+tk);
        return result;
    }

    @RequestMapping(value = "/user/list", method = RequestMethod.GET)
    public ServiceResult<List<User>> list(BsQO qo) throws Exception{
        return userManager.listByQuery(qo);
    }

    @PostMapping(value = "user/checkUserName",produces="application/json; charset=UTF-8")
    public ServiceResult<User> checkUserName(@RequestParam Map<String,Object> map) throws Exception{
        return userManager.checkRepeat(map);
    }
    @PostMapping(value = "user/createUser",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> createUser(@RequestBody User user) throws Exception{
        return userManager.insertSelective(user);
    }
}


