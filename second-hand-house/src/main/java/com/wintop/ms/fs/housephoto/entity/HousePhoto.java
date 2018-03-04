/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housephoto.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * This class corresponds to the database table house_photo
 *
 * @mbg.generated 2018-03-04 14:29:54
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class HousePhoto extends BsData{
    /**
     * 房子相关图片id
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private Integer housePhotoId;

    /**
     * 房屋id
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private Integer houseId;

    /**
     * 房屋名称
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private String houseName;

    /**
     * 图片类型（室内图 户型图 环境图 周边地图）
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private String type;

    /**
     * 图片地址
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private String photoAddr;

    /**
     * 创建时间
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private Date createTime;

    /**
     * 创建人id
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private Integer createId;

    /**
     * 创建人名字
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private String createName;

 }