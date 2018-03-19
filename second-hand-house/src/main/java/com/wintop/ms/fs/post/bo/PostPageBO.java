/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.post.bo;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;
import java.util.Map;

/**
 * This class corresponds to the database table post
 *
 * @mbg.generated 2018-03-19 21:16:50
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class PostPageBO extends BsData{
    /**
     * 帖子id
     *
     * @mbg.generated 2018-03-19 21:16:50
     */
    private Integer postId;

    /**
     * 帖子标题
     *
     * @mbg.generated 2018-03-19 21:16:50
     */
    private String postTitle;

    /**
     * 帖子内容
     *
     * @mbg.generated 2018-03-19 21:16:50
     */
    private String postContent;

    /**
     * 审核状态：审核中，审核通过,駁回
     *
     * @mbg.generated 2018-03-19 21:16:50
     */
    private String state;

    /**
     * 发帖时间
     *
     * @mbg.generated 2018-03-19 21:16:50
     */
    private Date createTime;

    /**
     * 发帖人id
     *
     * @mbg.generated 2018-03-19 21:16:50
     */
    private Integer createId;

    /**
     * 发帖人名字
     *
     * @mbg.generated 2018-03-19 21:16:50
     */
    private String createName;

    private String remark;

    private Map<String, Object> map;

    }