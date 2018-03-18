/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.house.bo;

import com.wintop.ms.common.base.BsData;
import com.wintop.ms.fs.houseconf.entity.HouseConf;
import com.wintop.ms.fs.housestar.entity.HouseStar;
import com.wintop.ms.fs.housetag.entity.HouseTag;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * This class corresponds to the database table house
 *
 * @mbg.generated 2018-03-04 14:18:04
 */
@Data
public class UpdateHouseTagDTO extends BsData{

    /**
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Integer houseId;

    private String houseName;

    /**
     * 房屋标签
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private List<HouseTag> houseTag;
 }