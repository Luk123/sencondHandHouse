/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housestar.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table house_star
 *
 * @mbg.generated 2018-03-04 14:46:25
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class HouseStar extends BsData {
    /**
     * 房屋id
     *
     * @mbg.generated 2018-03-04 14:46:25
     */
    private Integer houseId;

    /**
     * 房屋名称
     *
     * @mbg.generated 2018-03-04 14:46:25
     */
    private String houseName;

    /**
     * 简介
     *
     * @mbg.generated 2018-03-04 14:46:25
     */
    private String abs;

    /**
     * 户型介绍
     *
     * @mbg.generated 2018-03-04 14:46:25
     */
    private String typeDesc;

    /**
     * 装修描述
     *
     * @mbg.generated 2018-03-04 14:46:25
     */
    private String buildDesc;

 }