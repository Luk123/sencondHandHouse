package com.wintop.ms.fs.user.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.common.utils.DAOUtils;
import com.wintop.ms.fs.user.bo.UpdateUserScoreDTO;
import com.wintop.ms.fs.user.bo.UserPageQO;
import com.wintop.ms.fs.user.entity.User;
import com.wintop.ms.fs.user.service.UserManager;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/**
 * 用户Controller。
 */
@RestController
public class UserController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(UserController.class);

    @Resource
    private UserManager userManager;

    /**
     * 用户登陆接口
     * @param request
     * @param response
     * @return
     */
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
                    map.put("account",dec[0]);
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
    /**
     * 用户列表
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/user/list", method = RequestMethod.GET)
    public ServiceResult<List<User>> list(BsQO qo) throws Exception{
        return userManager.listByQuery(qo);
    }

    /**
     * 检查用户名是否重复
     * @param map
     * @return
     */
    @PostMapping(value = "user/checkUserName",produces="application/json; charset=UTF-8")
    public ServiceResult<User> checkUserName(@RequestBody Map<String,Object> map){
        return userManager.checkRepeat(map);
    }

    /**
     * 注册用户信息
     * @param user
     * @return
     */
    @PostMapping(value = "user/createUser",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> createUser(@RequestBody User user){
        user.setCreateTime(new Date());
        return userManager.insertSelective(user);
    }

    /**
     * 根据用户Id查询用户信息
     * @param userId
     * @return
     */
    @PostMapping(value = "user/getUserInfoById",produces="application/json; charset=UTF-8")
    public ServiceResult<User> getUserInfoById(Integer userId){
        return userManager.selectByPrimaryKey(userId);
    }

    /**
     * 修改用户信息
     * @param user
     * @return
     */
    @PostMapping(value = "user/updateInfoById",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> updateInfoById(@RequestBody User user){
        return userManager.updateSelective(user);
    }
    /**
     * 用户积分调整
     * @param user
     * @return
     */
    @PostMapping(value = "user/update/score",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> updateUserScore(@RequestBody UpdateUserScoreDTO user) throws  Exception{
        return userManager.updateSelective(DAOUtils.cloneBean(User.class,user));
    }

    /**
     * 用户分页
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/user/page", method = RequestMethod.GET)
    public Map<String, Object> page(UserPageQO qo) {
        Pager pager=userManager.pageByQuery(User.class,qo,null).getPager();
        Map<String, Object> resultMap = new HashMap<String, Object>();
        //总条数
        resultMap.put("total", pager.getCount());
        //获取每页数据
        resultMap.put("rows", pager.getList());
        return resultMap;
    }
}


