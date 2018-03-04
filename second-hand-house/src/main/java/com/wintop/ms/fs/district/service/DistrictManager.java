package com.wintop.ms.fs.district.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.district.entity.District;
import com.wintop.ms.fs.district.mapper.DistrictDAO;
import org.springframework.stereotype.Service;
@Service("districtManager")
public class DistrictManager extends BsManager<DistrictDAO, District> {

}