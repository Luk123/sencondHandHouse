/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housesale.bo;

import com.wintop.ms.common.base.PageQO;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table house_sale
 *
 * @mbg.generated 2018-03-04 14:33:56
 */
@SuppressWarnings("serial")
@Data
@EqualsAndHashCode(callSuper = false)
public class HouseSalePageQO extends PageQO{

    /**
     * 房屋名称
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private String houseName;

    private Integer userId;
}