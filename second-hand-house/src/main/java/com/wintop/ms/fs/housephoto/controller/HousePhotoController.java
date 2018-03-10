package com.wintop.ms.fs.housephoto.controller;

import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.housephoto.bo.HousePhotoBO;
import com.wintop.ms.fs.housephoto.bo.HousePhotoQO;
import com.wintop.ms.fs.housephoto.service.HousePhotoManager;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

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
    public ServiceResult<Pager> list(HousePhotoQO qo) throws Exception{
        qo.setPageSize(4);
        return housePhotoManager.pageByQuery(HousePhotoBO.class,qo,null);
//        //引入PageHelper分页插件
//        //在查询之前只需要调用。传入页码，以及每页大小
//        PageHelper.startPage(0,4,true);
//        //startPage后面紧跟的查询就是分页查询
//        List<HousePhoto> listAll = housePhotoManager.listByQuery(qo).getResult();
//        List<HousePhotoBO> list = DAOUtils.cloneList(HousePhotoBO.class,listAll);
//        //pageInfo包装查询后的结果，只需要将pageINfo交给页面
//        //封装了详细的分页信息，包括我们查询出来的数据，传入连续显示的页数
//        PageInfo page = new PageInfo(list,4);
//        ServiceResult<PageInfo>  res = new ServiceResult<PageInfo>();
//        res.setResult(page);
//        res.setSuccess(true);
//        return res;
    }

}


