/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.houseconf.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table house_conf
 *
 * @mbg.generated 2018-03-04 14:24:42
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class HouseConf extends BsData{
    /**
     * 房屋id
     *
     * @mbg.generated 2018-03-04 14:24:42
     */
    private Integer houseId;

    /**
     * 房屋名称
     *
     * @mbg.generated 2018-03-04 14:24:42
     */
    private String houseName;

    /**
     * 小区设施
     *
     * @mbg.generated 2018-03-04 14:24:42
     */
    private String facility;

    /**
     * 生活配套
     *
     * @mbg.generated 2018-03-04 14:24:42
     */
    private String lifeConf;

    /**
     * 轨道交通
     *
     * @mbg.generated 2018-03-04 14:24:42
     */
    private String traffic;

 }