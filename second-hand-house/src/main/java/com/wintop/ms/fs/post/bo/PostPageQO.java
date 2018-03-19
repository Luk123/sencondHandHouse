/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.post.bo;

import com.wintop.ms.common.base.PageQO;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table post
 *
 * @mbg.generated 2018-03-19 21:16:50
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class PostPageQO extends PageQO{

    /**
     * 帖子标题
     *
     * @mbg.generated 2018-03-19 21:16:50
     */
    private String postTitle;

    /**
     * 审核状态：审核中，审核通过,駁回
     *
     * @mbg.generated 2018-03-19 21:16:50
     */
    private String state;

    /**
     * 发帖人id
     *
     * @mbg.generated 2018-03-19 21:16:50
     */
    private Integer createId;
    }