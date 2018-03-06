package com.wintop.ms.fs.house.controller;

import com.github.pagehelper.PageInfo;
import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.dic.entity.Dic;
import com.wintop.ms.fs.dic.service.DicManager;
import com.wintop.ms.fs.house.bo.HousePageBO;
import com.wintop.ms.fs.house.bo.HousePageQO;
import com.wintop.ms.fs.house.entity.House;
import com.wintop.ms.fs.house.service.HouseManager;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * 用户微服务Controller。
 */
@RestController
public class HouseController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(HouseController.class);

    @Resource
    private HouseManager houseManager;

    /**
     * 获取房屋分页
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    @RequestMapping(value = "/house/page", method = RequestMethod.GET)
    public ServiceResult<PageInfo> pageByQuery(HousePageQO qo) throws Exception{
        return houseManager.pageByQuery(HousePageBO.class, qo,null);
    }

}


