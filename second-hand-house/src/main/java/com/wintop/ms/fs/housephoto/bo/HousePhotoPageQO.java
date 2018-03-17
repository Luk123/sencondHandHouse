/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housephoto.bo;

import com.wintop.ms.common.base.BsData;
import com.wintop.ms.common.base.PageQO;
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
public class HousePhotoPageQO extends PageQO{

    private Integer houseId;

    /**
     * 用户id
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private Integer userId;

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
 }