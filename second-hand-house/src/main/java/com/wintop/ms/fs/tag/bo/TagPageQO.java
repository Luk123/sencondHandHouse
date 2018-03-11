/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.tag.bo;

import com.wintop.ms.common.base.PageQO;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table tag
 *
 * @mbg.generated 2018-03-04 14:57:07
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class TagPageQO extends PageQO {

    /**
     * 标签名称
     *
     * @mbg.generated 2018-03-04 14:57:07
     */
    private String tagName;

    /**
     * 状态：启用，停用
     *
     * @mbg.generated 2018-03-04 14:57:07
     */
    private String state;

}