/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housephoto.bo;

import com.wintop.ms.common.base.PageQO;
import lombok.Data;

/**
 * This class corresponds to the database table house_photo
 *
 * @mbg.generated 2018-03-04 14:29:54
 */
@Data
public class HousePhotoQO extends PageQO{

    /**
     * 图片类型（室内图 户型图 环境图 周边地图）
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private String type = "室内图";

 }