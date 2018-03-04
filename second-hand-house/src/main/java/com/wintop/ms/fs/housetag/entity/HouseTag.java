/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housetag.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * This class corresponds to the database table house_tag
 *
 * @mbg.generated 2018-03-04 14:53:25
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class HouseTag extends BsData {
    /**
     * 房屋标签id
     *
     * @mbg.generated 2018-03-04 14:53:25
     */
    private Integer houseTagId;

    /**
     * 房屋id
     *
     * @mbg.generated 2018-03-04 14:53:25
     */
    private Integer houseId;

    /**
     * 房屋名称
     *
     * @mbg.generated 2018-03-04 14:53:25
     */
    private String houseName;

    /**
     * 标签id
     *
     * @mbg.generated 2018-03-04 14:53:25
     */
    private Integer tagId;

    /**
     * 标签名字
     *
     * @mbg.generated 2018-03-04 14:53:25
     */
    private String tagName;

    /**
     * 创建时间
     *
     * @mbg.generated 2018-03-04 14:53:25
     */
    private Date createTime;

    /**
     * 创建人id
     *
     * @mbg.generated 2018-03-04 14:53:25
     */
    private Integer createId;

    /**
     * 创建人名字
     *
     * @mbg.generated 2018-03-04 14:53:25
     */
    private String createName;

}