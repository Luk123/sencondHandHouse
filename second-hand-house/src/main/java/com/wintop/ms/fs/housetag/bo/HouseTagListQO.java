/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housetag.bo;

import com.wintop.ms.common.base.BsQO;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table house_tag
 *
 * @mbg.generated 2018-03-04 14:53:25
 */
@SuppressWarnings("serial")
@Data
@EqualsAndHashCode(callSuper = false)
public class HouseTagListQO extends BsQO {

    public HouseTagListQO() {
    }

    public HouseTagListQO(Integer houseId) {
        this.houseId = houseId;
    }

    /**
     * 房屋id
     *
     * @mbg.generated 2018-03-04 14:53:25
     */
    private Integer houseId;

}