package com.wintop.ms.fs.house.controller;

import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.common.utils.DAOUtils;
import com.wintop.ms.fs.house.bo.HouseInfo;
import com.wintop.ms.fs.house.bo.HousePageBO;
import com.wintop.ms.fs.house.bo.HousePageQO;
import com.wintop.ms.fs.house.entity.House;
import com.wintop.ms.fs.house.service.HouseManager;
import com.wintop.ms.fs.houseconf.entity.HouseConf;
import com.wintop.ms.fs.houseconf.service.HouseConfManager;
import com.wintop.ms.fs.housescore.service.HouseScoreManager;
import com.wintop.ms.fs.housestar.entity.HouseStar;
import com.wintop.ms.fs.housestar.service.HouseStarManager;
import com.wintop.ms.fs.housetag.bo.HouseTagListQO;
import com.wintop.ms.fs.housetag.entity.HouseTag;
import com.wintop.ms.fs.housetag.service.HouseTagManager;
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

    @Resource
    private HouseConfManager houseConfManager;

    @Resource
    private HouseStarManager houseStarManager;

    @Resource
    private HouseScoreManager houseScoreManager;

    @Resource
    private HouseTagManager houseTagManager;

    /**
     * 获取房屋分页
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    @RequestMapping(value = "/house/page", method = RequestMethod.GET)
    public ServiceResult<Pager> pageByQuery(HousePageQO qo) throws Exception{
        return houseManager.pageByQuery(HousePageBO.class, qo,null);
    }

    /**
     * 获取房屋详情
     *
     * @param houseId 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    @RequestMapping(value = "/house/info", method = RequestMethod.GET)
    public ServiceResult<HouseInfo> getInfo(Integer houseId) throws Exception{
        ServiceResult<HouseInfo> res =new ServiceResult<HouseInfo>();
      if(houseId == null) {
          res.setSuccess(false);
          res.setMessage("房屋id不能为空");
      }
      House house =  houseManager.selectByPrimaryKey(houseId).getResult();
      HouseInfo houseinfo = DAOUtils.cloneBean(HouseInfo.class,house);
        //
      HouseStar houseStar = houseStarManager.selectByPrimaryKey(houseId).getResult();
        houseinfo.setHouseStar(houseStar);
        //
      HouseConf houseConf = houseConfManager.selectByPrimaryKey(houseId).getResult();
        houseinfo.setHouseConf(houseConf);
        //
       List<HouseTag> houseTag =  houseTagManager.listByQuery(new HouseTagListQO(houseId)).getResult();
        houseinfo.setHouseTag(houseTag);
        //
        res.setResult(houseinfo);
        res.setSuccess(true);
      return res;
    }
}


