package com.wintop.ms.fs.user.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.user.bo.UserLoginQO;
import com.wintop.ms.fs.user.entity.User;
import com.wintop.ms.fs.user.service.UserManager;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * 用户Controller。
 */
@RestController
public class UserController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(UserController.class);

    @Resource
    private UserManager userManager;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ServiceResult<List<User>> login(UserLoginQO qo) throws Exception{
        return userManager.listByQuery(qo);
    }

    @RequestMapping(value = "/user/list", method = RequestMethod.GET)
    public ServiceResult<List<User>> list(BsQO qo) throws Exception{
        return userManager.listByQuery(qo);
    }

}


