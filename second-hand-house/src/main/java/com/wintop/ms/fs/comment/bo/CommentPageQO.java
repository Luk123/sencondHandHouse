/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.comment.bo;

import com.wintop.ms.common.base.PageQO;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table comment
 *
 * @mbg.generated 2018-03-19 21:27:16
 */
@SuppressWarnings("serial")
@Data
@EqualsAndHashCode(callSuper = false)
public class CommentPageQO extends PageQO{

    /**
     * 评论内容
     *
     * @mbg.generated 2018-03-19 21:27:16
     */
    private String content;

    /**
     * 帖子id
     *
     * @mbg.generated 2018-03-19 21:27:16
     */
    private Integer postId;

}