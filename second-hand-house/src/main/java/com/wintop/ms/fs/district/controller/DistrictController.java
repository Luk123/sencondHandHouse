package com.wintop.ms.fs.district.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.dic.entity.Dic;
import com.wintop.ms.fs.dic.service.DicManager;
import com.wintop.ms.fs.district.bo.DistrictNameBO;
import com.wintop.ms.fs.district.service.DistrictManager;
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
public class DistrictController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(DistrictController.class);

    @Resource
    private DistrictManager districtManager;

    /**
     * 获取省市县接口
     * @param districtId
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/district/list", method = RequestMethod.GET)
    public ServiceResult<List<DistrictNameBO>> selectByParentId(Long districtId) throws Exception{
        return districtManager.selectByParentId(districtId);
    }

}


