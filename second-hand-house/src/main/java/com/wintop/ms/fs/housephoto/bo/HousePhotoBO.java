/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housephoto.bo;

import lombok.Data;

import java.io.Serializable;

/**
 * This class corresponds to the database table house_photo
 *
 * @mbg.generated 2018-03-04 14:29:54
 */
@Data
public class HousePhotoBO implements Serializable{

    /**
     * 房屋名称
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private String houseName;

    /**
     * 图片地址
     *
     * @mbg.generated 2018-03-04 14:29:54
     */
    private String photoAddr;

 }