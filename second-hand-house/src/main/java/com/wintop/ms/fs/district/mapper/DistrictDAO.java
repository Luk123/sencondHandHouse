/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.district.mapper;

import com.wintop.ms.common.base.BsDao;
import com.wintop.ms.fs.district.entity.District;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DistrictDAO extends BsDao<District> {
    /**
     * 省市县查询接口
     *
     * @param districtId
     * @return
     * @author maguangzu
     * @since 2017年7月21日
     */
    List<District> selectByParentId(Long districtId);
}