/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.tag.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * This class corresponds to the database table tag
 *
 * @mbg.generated 2018-03-04 14:57:07
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Tag extends BsData {
    /**
     * 标签id
     *
     * @mbg.generated 2018-03-04 14:57:07
     */
    private Integer tagId;

    /**
     * 标签名称
     *
     * @mbg.generated 2018-03-04 14:57:07
     */
    private String tagName;

    /**
     * 备注
     *
     * @mbg.generated 2018-03-04 14:57:07
     */
    private String remark;

    /**
     * 创建时间
     *
     * @mbg.generated 2018-03-04 14:57:07
     */
    private Date createTime;

    /**
     * 状态：启用，停用
     *
     * @mbg.generated 2018-03-04 14:57:07
     */
    private String state;

}