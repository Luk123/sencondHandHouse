/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.house.bo;

import java.util.List;

import com.wintop.ms.common.base.BsData;
import com.wintop.ms.fs.housetag.entity.HouseTag;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table house
 *
 * @mbg.generated 2018-03-04 14:18:04
 */
@Data
@EqualsAndHashCode(callSuper=false)
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