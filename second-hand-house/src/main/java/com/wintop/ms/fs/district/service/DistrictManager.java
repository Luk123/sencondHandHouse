package com.wintop.ms.fs.district.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.common.utils.DAOUtils;
import com.wintop.ms.fs.district.bo.DistrictNameBO;
import com.wintop.ms.fs.district.entity.District;
import com.wintop.ms.fs.district.mapper.DistrictDAO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("districtManager")
public class DistrictManager extends BsManager<DistrictDAO, District> {
    /**
     * 省市县查询接口
     *
     * @param districtId
     * @return
     * @author maguangzu
     * @since 2017年7月21日
     */
    public ServiceResult<List<DistrictNameBO>> selectByParentId(Long districtId) throws Exception{
        List<District> list = mapper.selectByParentId(districtId);
        List<DistrictNameBO> res =DAOUtils.cloneList(DistrictNameBO.class,list);
        return new ServiceResult<>(true,res);
    }
}