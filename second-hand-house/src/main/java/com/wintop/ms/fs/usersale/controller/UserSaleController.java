package com.wintop.ms.fs.usersale.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.usersale.bo.UserSaleQO;
import com.wintop.ms.fs.usersale.entity.UserSale;
import com.wintop.ms.fs.usersale.service.UserSaleManager;

/**
 * @author zhangzijuan
 * @Description:用户售卖
 * @date 2018-03-11
 */
@RestController
public class UserSaleController {
    @Resource
    private UserSaleManager userSaleManager;
    /**
     * 用户售卖记录分页
     * @return list集合
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @RequestMapping(value = "/userSale/page", method = RequestMethod.GET)
    public Map<String, Object> pageByQuery(UserSaleQO qo){
        return userSaleManager.pageByQuery(UserSale.class, qo,null);
    }
    /**
     * 根据售卖id查看详情
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @RequestMapping(value = "/userSale/getSaleInfoById", method = RequestMethod.GET)
    public ServiceResult<UserSale> getBuyInfoById(Integer userSaleId){
        return userSaleManager.selectByPrimaryKey(userSaleId);
    }
}
