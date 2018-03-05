/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.house.bo;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * This class corresponds to the database table house
 *
 * @mbg.generated 2018-03-04 14:18:04
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class HousePageBO implements Serializable{
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

    /**
     * 房屋户型,例子：3室2厅1厨1卫
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String houseHall;

    /**
     * 建筑面积
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Double area;

    /**
     * 详细地址
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String addr;

    /**
     * 楼层
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Integer floor;

    /**
     * 房屋售价
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private BigDecimal salePrice;

    /**
     * 房屋朝向
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String direction;

    /**
     * 装修（精装修、豪华装修、普通装修、毛坯）
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String renovation;

    /**
     * 单价，例：10000 元/m2
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private BigDecimal unitPrice;

    /**
     * 房屋主图地址
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String majorAddr;

    /**
     * 创建时间
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Date createTime;

 }