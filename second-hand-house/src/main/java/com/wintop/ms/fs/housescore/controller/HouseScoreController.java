package com.wintop.ms.fs.housescore.controller;

import com.wintop.ms.common.base.ServiceResult;
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
public class HouseScoreController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(HouseScoreController.class);

    @Resource
    private HouseScoreManager houseScoreManager;

    /**
     * 根据房屋id获取房屋积分评论
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/houseScore/list", method = RequestMethod.GET)
    public ServiceResult<List<HouseScore>> list(HouseScoreListQO qo) throws Exception{
        return houseScoreManager.listByQuery(qo);
    }
}


