/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.dic.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * This class corresponds to the database table dic
 *
 * @mbg.generated 2018-03-03 23:12:50
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Dic extends BsData {
    /**
     * 字典id
     *
     * @mbg.generated 2018-03-03 23:12:50
     */
    private Integer dicId;

    /**
     * 字典类名称
     *
     * @mbg.generated 2018-03-03 23:12:50
     */
    private String dicClsName;

    /**
     * 字典名称
     *
     * @mbg.generated 2018-03-03 23:12:50
     */
    private String dicName;

    /**
     * 状态: 停用;  启用
     *
     * @mbg.generated 2018-03-03 23:12:50
     */
    private String state;

    /**
     * 备注
     *
     * @mbg.generated 2018-03-03 23:12:50
     */
    private String remark;

    /**
     * 创建时间
     *
     * @mbg.generated 2018-03-03 23:12:50
     */
    private Date createTime;

}