package com.wintop.ms.fs.userbuy.controller;

import com.github.pagehelper.PageInfo;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.house.bo.HousePageBO;
import com.wintop.ms.fs.house.bo.HousePageQO;
import com.wintop.ms.fs.userbuy.bo.UserBuyQO;
import com.wintop.ms.fs.userbuy.entity.UserBuy;
import com.wintop.ms.fs.userbuy.service.UserBuyManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author zhangzijuan
 * @Description:用户购买
 * @date 2018-03-10
 */
@RestController
public class UserBuyController {
    @Resource
    private UserBuyManager userBuyManager;
    /**
     * 用户购买记录分页
     * @return list集合
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userBuy/page",produces="application/json; charset=UTF-8")
    public ServiceResult<PageInfo> pageByQuery(UserBuyQO qo){
        return userBuyManager.pageByQuery(UserBuy.class, qo,null);
    }
    /**
     * 根据购买id查看详情
     * @return list集合
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userBuy/getBuyInfoById",produces="application/json; charset=UTF-8")
    public ServiceResult<UserBuy> getBuyInfoById(Integer userBuyId){
        return userBuyManager.selectByPrimaryKey(userBuyId);
    }
}
