/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.district.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table district
 *
 * @mbg.generated 2018-03-04 14:05:21
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class District extends BsData {
    /**
     * 行政区划id
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private Long districtId;

    /**
     * 上级id
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private Long parentId;

    /**
     * 行政区划编码
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private String districtCode;

    /**
     * 行政区划名称
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private String districtName;

    /**
     * 类型: 1:省, 2:市, 3: 县(区)
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private Integer districtType;

    /**
     * 拼音码
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private String pinyinCode;

    /**
     * 速记码
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private String shortCode;

    /**
     * 状态: 1:正常, 2:撤销
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private Integer state;

}