/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.district.bo;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table district
 *
 * @mbg.generated 2018-03-04 14:05:21
 */
@SuppressWarnings("serial")
@Data
@EqualsAndHashCode(callSuper = false)
public class DistrictNameBO implements Serializable {
    /**
     * 行政区划id
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private Long districtId;

    /**
     * 行政区划名称
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private String districtName;
}