package com.wintop.ms.fs.housesale.controller;

import java.util.Date;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.common.utils.DAOUtils;
import com.wintop.ms.fs.house.entity.House;
import com.wintop.ms.fs.house.service.HouseManager;
import com.wintop.ms.fs.housesale.bo.HouseSalePageQO;
import com.wintop.ms.fs.housesale.entity.HouseSale;
import com.wintop.ms.fs.housesale.service.HouseSaleManager;
import com.wintop.ms.fs.userbuy.entity.UserBuy;
import com.wintop.ms.fs.userbuy.service.UserBuyManager;
import com.wintop.ms.fs.usersale.entity.UserSale;
import com.wintop.ms.fs.usersale.service.UserSaleManager;

/**
 * 房屋图片Controller。
 */
@RestController
public class HouseSaleController {

    @Resource
    private HouseSaleManager houseSaleManager;

    @Resource
    private UserSaleManager userSaleManager;

    @Resource
    private UserBuyManager userBuyManager;

    @Resource
    private HouseManager houseManager;

    /**
     * 房屋售卖记录分页
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/houseSale/page", method = RequestMethod.GET)
    public Map<String, Object> page(HouseSalePageQO qo) throws Exception{
        return houseSaleManager.pageByQuery(HouseSale.class,qo,null);
    }

    /**
     * 售卖房屋
     * @param dto
     * @return
     */
    @PostMapping(value = "house/sale",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> saleHouse(HouseSale dto) throws  Exception{
        System.out.println(dto.toString());
        dto.setSaleTime(new Date());
        // insert houseSale
        ServiceResult<Integer> res = houseSaleManager.insert(dto);
        // insert userSale
        UserSale us = DAOUtils.cloneBean(UserSale.class,dto);
        userSaleManager.insert(us);
        // insert userBuy
        UserBuy ub = DAOUtils.cloneBean(UserBuy.class,dto);
        ub.setUserId(dto.getCustId());
        ub.setUserName(dto.getCustName());
        ub.setBuyDate(dto.getSaleTime());
        ub.setBuyPrice(dto.getSalePrice());
        userBuyManager.insert(ub);
        // update house
        House h = new House();
        h.setHouseId(dto.getHouseId());
        h.setOwnerId(dto.getCustId());
        h.setOwnerName(dto.getCustName());
        h.setContactWay(" ");
        houseManager.updateSelective(h);
        return res;
    }
}


