/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housetag.mapper;

import com.wintop.ms.common.base.BsDao;
import com.wintop.ms.fs.housetag.entity.HouseTag;
import org.springframework.stereotype.Repository;
@Repository
public interface HouseTagDAO extends BsDao<HouseTag> {

    /**
     * delete all house tag by houseId
     * @param houseId
     * @return
     */
    Integer deleteByHouseId(Integer houseId);
}