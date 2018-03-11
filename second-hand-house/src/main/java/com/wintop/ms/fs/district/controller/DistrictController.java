package com.wintop.ms.fs.district.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.dic.entity.Dic;
import com.wintop.ms.fs.dic.service.DicManager;
import com.wintop.ms.fs.district.bo.DistrictNameBO;
import com.wintop.ms.fs.district.bo.DistrictPageQO;
import com.wintop.ms.fs.district.entity.District;
import com.wintop.ms.fs.district.service.DistrictManager;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

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
        if(districtId == null){
            ServiceResult<List<DistrictNameBO>> res = new  ServiceResult<List<DistrictNameBO>>();
            res.setSuccess(false);
            res.setMessage("id不能为空");
        }
        return districtManager.selectByParentId(districtId);
    }

    /**
     * 区域分页
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/district/page", method = RequestMethod.GET)
    public ServiceResult<Pager> page(DistrictPageQO qo) throws Exception{
        return districtManager.pageByQuery(District.class,qo,null);
    }

    /**
     * 新增下級區域
     * @param district
     * @return
     */
    @PostMapping(value = "/district/insert",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> insert(@RequestBody District district) throws  Exception{
        return districtManager.insert(district);
    }

    /**
     * 区域修改
     * @param district
     * @return
     */
    @PostMapping(value = "/district/update",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> update(@RequestBody District district) throws  Exception{
        return districtManager.updateSelective(district);
    }

    /**
     * 区域刪除
     * @param districtId
     * @return
     */
    @RequestMapping(value = "/district/delete", method = RequestMethod.GET)
    public ServiceResult<Integer> delete(Long districtId) throws  Exception{
        return districtManager.deleteByPrimaryKey(districtId);
    }
}


