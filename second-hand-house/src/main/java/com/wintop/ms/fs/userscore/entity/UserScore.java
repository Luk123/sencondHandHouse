/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.userscore.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table house_score
 *
 * @mbg.generated 2018-03-04 14:39:32
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class UserScore extends BsData{
    /**
     * 用户积分id
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private Integer userScoreId;

    /**
     * 用户id
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private Integer userId;

    /**
     * 用户名称
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private String userName;

    /**
     * 评价人id
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private Integer custId;

    /**
     * 评价人名称
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private String custName;

    /**
     * 评分
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private Integer countScore;

    /**
     * 房屋评论
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private String comment;

 }