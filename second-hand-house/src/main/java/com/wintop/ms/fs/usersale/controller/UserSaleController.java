package com.wintop.ms.fs.usersale.controller;

import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.usersale.bo.UserSaleQO;
import com.wintop.ms.fs.usersale.entity.UserSale;
import com.wintop.ms.fs.usersale.service.UserSaleManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

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
    @PostMapping(value = "/userSale/page",produces="application/json; charset=UTF-8")
    public ServiceResult<Pager> pageByQuery(UserSaleQO qo){
        return userSaleManager.pageByQuery(UserSale.class, qo,null);
    }
    /**
     * 根据售卖id查看详情
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userSale/getSaleInfoById",produces="application/json; charset=UTF-8")
    public ServiceResult<UserSale> getBuyInfoById(Integer userSaleId){
        return userSaleManager.selectByPrimaryKey(userSaleId);
    }
}
