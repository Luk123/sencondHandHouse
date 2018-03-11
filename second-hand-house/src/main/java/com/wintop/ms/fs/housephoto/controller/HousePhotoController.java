package com.wintop.ms.fs.housephoto.controller;

import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.housephoto.bo.HouseListQO;
import com.wintop.ms.fs.housephoto.bo.HousePhotoBO;
import com.wintop.ms.fs.housephoto.bo.HousePhotoQO;
import com.wintop.ms.fs.housephoto.entity.HousePhoto;
import com.wintop.ms.fs.housephoto.service.HousePhotoManager;
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
public class HousePhotoController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(HousePhotoController.class);

    @Resource
    private HousePhotoManager housePhotoManager;

    /**
     * 主页面分页展示图片
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/housePhoto/page", method = RequestMethod.GET)
    public ServiceResult<Pager> page(HousePhotoQO qo) throws Exception{
        qo.setPageSize(4);
        return housePhotoManager.pageByQuery(HousePhotoBO.class,qo,null);
    }

    /**
     * 根据房屋类型获取图片
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/housePhoto/list", method = RequestMethod.GET)
    public ServiceResult<List<HousePhoto>> list(HouseListQO qo) throws Exception{
        return housePhotoManager.listByQuery(qo);
    }
}


