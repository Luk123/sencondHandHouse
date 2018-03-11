package com.wintop.ms.fs.housesale.controller;

import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.housesale.bo.HouseSalePageQO;
import com.wintop.ms.fs.housesale.entity.HouseSale;
import com.wintop.ms.fs.housesale.service.HouseSaleManager;
import com.wintop.ms.fs.housescore.bo.HouseScoreListQO;
import com.wintop.ms.fs.housescore.entity.HouseScore;
import com.wintop.ms.fs.housescore.service.HouseScoreManager;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * 房屋图片Controller。
 */
@RestController
public class HouseSaleController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(HouseSaleController.class);

    @Resource
    private HouseSaleManager houseSaleManager;

    /**
     * 房屋售卖记录分页
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/houseSale/page", method = RequestMethod.GET)
    public ServiceResult<Pager> page(HouseSalePageQO qo) throws Exception{
        return houseSaleManager.pageByQuery(qo);
    }
}


