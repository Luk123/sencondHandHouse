/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.house.bo;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table house
 *
 * @mbg.generated 2018-03-04 14:18:04
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class HouseNameBO extends BsData{
    /**
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Integer houseId;

    /**
     * 房屋标题
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String houseName;

 }