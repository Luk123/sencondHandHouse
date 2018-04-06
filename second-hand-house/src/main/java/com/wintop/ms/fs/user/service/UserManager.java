package com.wintop.ms.fs.user.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.user.entity.User;
import com.wintop.ms.fs.user.mapper.UserDAO;

@Service("userManager")
public class UserManager extends BsManager<UserDAO, User> {
    @Autowired
    protected UserDAO userDAO;
    /**
     *@Author:zhangzijuan
     *@date 2018/3/9
     *@param:
     */
    public ServiceResult<User> checkRepeat(Map<String,Object> map){
        ServiceResult<User> result=new ServiceResult<>();
        try {
            result.setMessage("查询成功");
            result.setSuccess(true);
            result.setResult(userDAO.checkRepeat(map));
        } catch (Exception e) {
            result.setMessage("异常");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    public ServiceResult<User> selectByUserNameAndPw(Map<String,Object> map){
        ServiceResult<User> result=new ServiceResult<>();
        try {
            User user=userDAO.selectByUserNameAndPwd(map);
            if(user!=null){
                result.setMessage("用户验证成功");
                result.setSuccess(true);
            }else {
                result.setSuccess(false);
                result.setMessage("用户名或密码错误");
            }
            result.setResult(user);
        } catch (Exception e) {
            result.setMessage("异常");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

}