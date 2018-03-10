/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.dic.bo;

import com.wintop.ms.common.base.BsData;
import com.wintop.ms.common.base.PageQO;
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
public class DicPageQO extends PageQO {

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

}