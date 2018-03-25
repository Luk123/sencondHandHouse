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
public class InsertHouseDTO extends BsData{

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
     * 套内面积
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Double realArea;

    /**
     * 所在省
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String provice;

    /**
     * 所在市
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String city;

    /**
     * 区/县
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String district;

    /**
     * 详细地址
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String addr;

    /**
     * 建筑类型：塔楼，板楼，板塔结合
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String buildType;

    /**
     * 建造年份
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String buildYear;

    /**
     * 房屋类型（1普通住宅，2公寓、3别墅、5平房、5其他）
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String houseType;

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
     * 参考首付
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private BigDecimal fristPay;

    /**
     * 参考月供
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private BigDecimal monthPay;

    /**
     * 房主id
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Integer ownerId;

    /**
     * 房主姓名
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String ownerName;

    /**
     * 房主电话
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String contactWay;

    /**
     * 房屋描述
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String descb;

    /**
     * 房屋状态 1未发布  2售卖中 3已售
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String state;

    /**
     * 房屋主图地址
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String majorAddr;

    /**
     * 备注
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String remark;

    /**
     * 有无电梯：有，无
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String liftFlag;

    /**
     * 供暖：集体供暖，自供暖，无供暖
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String heat;

    /**
     * 房龄，不存储，根据建造年份计算
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Integer houseAge;

    /**
     * 不动产单元号（产权证号）,28位
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String houseNo;

    /**
     * 创建时间
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Date createTime;

    /**
     * 房屋所有人id
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Integer createId;

    /**
     * 创建人名称
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String createName;
    /**
     * 房屋核心卖点
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    @NotNull
    private HouseStar houseStar;
    /**
     * 房屋周边配套
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    @NotNull
    private HouseConf houseConf;

    /**
     * 房屋标签
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private List<HouseTag> houseTag;

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

    private String tagIds;

    private String tagNames;
 }