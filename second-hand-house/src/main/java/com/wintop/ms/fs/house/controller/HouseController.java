package com.wintop.ms.fs.house.controller;

import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.common.utils.DAOUtils;
import com.wintop.ms.fs.house.bo.*;
import com.wintop.ms.fs.house.entity.House;
import com.wintop.ms.fs.house.service.HouseManager;
import com.wintop.ms.fs.houseconf.entity.HouseConf;
import com.wintop.ms.fs.houseconf.service.HouseConfManager;
import com.wintop.ms.fs.housescore.bo.HouseScoreListQO;
import com.wintop.ms.fs.housescore.entity.HouseScore;
import com.wintop.ms.fs.housescore.service.HouseScoreManager;
import com.wintop.ms.fs.housestar.entity.HouseStar;
import com.wintop.ms.fs.housestar.service.HouseStarManager;
import com.wintop.ms.fs.housetag.bo.HouseTagListQO;
import com.wintop.ms.fs.housetag.entity.HouseTag;
import com.wintop.ms.fs.housetag.service.HouseTagManager;
import com.wintop.ms.fs.user.entity.User;
import com.wintop.ms.fs.user.service.UserManager;
import org.slf4j.LoggerFactory;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

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

    @Resource
    private UserManager userManager;

    /**
     * 获取售卖中房屋分页
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    @RequestMapping(value = "/house/page", method = RequestMethod.GET)
    public Map<String, Object> pageByQuery(HousePageQO qo) throws Exception{
        qo.setState("售卖中");
        return houseManager.pageByQuery(HousePageBO.class,qo,null);
    }

    /**
     * 获取所有房屋分页
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    @RequestMapping(value = "/house/page/all", method = RequestMethod.GET)
    public Map<String, Object> pageAllByQuery(HousePageQO qo) throws Exception{
        return houseManager.pageByQuery(HousePageBO.class,qo,null);
    }

    /**
     * 获取所有房屋列表
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    @RequestMapping(value = "/house/list/name", method = RequestMethod.GET)
    public ServiceResult<List<HouseNameBO>> listByQuery(HousePageQO qo) throws Exception{
        return houseManager.listNameByQuery(HouseNameBO.class,qo);
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
          return res;
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
        if(CollectionUtils.isEmpty(houseTag)){
            houseinfo.setHouseTag(new ArrayList<>());
        }else{
            List<String> list =new ArrayList<>(houseTag.size());
            for(HouseTag u: houseTag){
                list.add(u.getTagName());
            }
            houseinfo.setHouseTag(list);
        }
        //
        User user = userManager.selectByPrimaryKey(house.getOwnerId()).getResult();
        houseinfo.setUser(user);
        //
        HouseScoreListQO hs = new HouseScoreListQO();
        hs.setHouseId(houseId);
        List<HouseScore> score = houseScoreManager.listByQuery(hs).getResult();
        houseinfo.setHouseScore(score);
        //
        res.setResult(houseinfo);
        res.setSuccess(true);
      return res;
    }

    /**
     * 新增房屋
     * @param dto
     * @return
     */
    @PostMapping(value = "house/insert",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> insertHouse(InsertHouseDTO dto) throws  Exception{
        int houseId=(int)(Math.random()*1000000);
        dto.setHouseId(houseId);
        dto.setCreateTime(new Date());
        dto.setCreateId(dto.getOwnerId());
        dto.setCreateName(dto.getOwnerName());
        House house = DAOUtils.cloneBean(House.class,dto);
        ServiceResult<Integer> res= houseManager.insert(house);
        // star
        HouseStar hs = DAOUtils.cloneBean(HouseStar.class,dto);
        hs.setHouseId(houseId);
        houseStarManager.insert(hs);
        // conf
        HouseConf hc = DAOUtils.cloneBean(HouseConf.class,dto);
        hc.setHouseId(houseId);
        houseConfManager.insert(hc);
        // tag
        if (org.apache.commons.lang3.StringUtils.isNotBlank(dto.getTagIds())){
            String [] tagIds=dto.getTagIds().split(",");
            String [] tagNames=dto.getTagNames().split(",");
            if (tagIds.length==tagNames.length){
                for (int i=0;i<tagIds.length;i++){
                    HouseTag ht =new HouseTag();
                    ht.setHouseId(houseId);
                    ht.setHouseName(dto.getHouseName());
                    ht.setCreateTime(new Date());
                    ht.setCreateId(dto.getOwnerId());
                    ht.setCreateName(dto.getOwnerName());
                    ht.setTagId(Integer.parseInt(tagIds[i]));
                    ht.setTagName(tagNames[i]);
                    houseTagManager.insert(ht);
                }
            }

        }
        return res;
    }

    /**
     * 更新房屋状态
     * @param dto
     * @return
     */
    @PostMapping(value = "house/update/state",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> updateHouse(House dto) throws  Exception {
        dto.setState("售卖中");
        return houseManager.updateSelective(dto);
    }
    /**
     * 更新房屋
     * @param dto
     * @return
     */
    @PostMapping(value = "house/update",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> updateHouse(InsertHouseDTO dto) throws  Exception{
        House house = DAOUtils.cloneBean(House.class,dto);
        ServiceResult<Integer> res= houseManager.updateSelective(house);
        Integer houseId = house.getHouseId();
        if(dto.getHouseStar()!=null){
            // star
            HouseStar hs = DAOUtils.cloneBean(HouseStar.class,dto);
            hs.setHouseId(houseId);
            houseStarManager.insert(hs);
        }
       if(dto.getHouseConf()!=null){
           // conf
           HouseConf hc = DAOUtils.cloneBean(HouseConf.class,dto);
           hc.setHouseId(houseId);
           houseConfManager.insert(hc);
       }
        // tag
        if (org.apache.commons.lang3.StringUtils.isNotBlank(dto.getTagIds())){
            // delete all house tag
            houseTagManager.deleteByHouseId(dto.getHouseId());
            String [] tagIds=dto.getTagIds().split(",");
            String [] tagNames=dto.getTagNames().split(",");
            if (tagIds.length==tagNames.length){
                for (int i=0;i<tagIds.length;i++){
                    HouseTag ht =new HouseTag();
                    ht.setHouseId(houseId);
                    ht.setHouseName(dto.getHouseName());
                    ht.setCreateTime(new Date());
                    ht.setCreateId(dto.getOwnerId());
                    ht.setCreateName(dto.getOwnerName());
                    ht.setTagId(Integer.parseInt(tagIds[i]));
                    ht.setTagName(tagNames[i]);
                    houseTagManager.insert(ht);
                }
            }

        }
        return res;
    }

    /**
     * 更新房屋标签
     * @param dto
     * @return
     */
    @PostMapping(value = "house/update/tag",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> updateHouse(UpdateHouseTagDTO dto) throws  Exception{
        ServiceResult<Integer> res= new ServiceResult<Integer>();
        res.setMessage("更新数据成功");
        res.setSuccess(true);
        res.setResult(1);
        // delete all house tag
        houseTagManager.deleteByHouseId(dto.getHouseId());
        // insert tag
        if(CollectionUtils.isEmpty(dto.getHouseTag())){
            return res;
        }
        for(HouseTag ht : dto.getHouseTag()){
            ht.setHouseId(dto.getHouseId());
            ht.setHouseName(dto.getHouseName());
            ht.setCreateTime(new Date());
            ht.setCreateId(1);
            houseTagManager.insert(ht);
        }
        return res;
    }
    /**
     * 房屋刪除
     * @param houseId
     * @return
     */
    @RequestMapping(value = "/house/delete", method = RequestMethod.GET)
    public ServiceResult<Integer> delete(Integer houseId) throws  Exception{
        return houseManager.deleteByPrimaryKey(houseId);
    }

}


