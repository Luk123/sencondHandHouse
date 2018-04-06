/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.userbuy.bo;

import com.wintop.ms.common.base.BsData;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table user_buy
 *
 * @mbg.generated 2018-03-04 15:03:43
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class InsertUserBuyDTO extends BsData {

    /**
     * 房屋id
     *
     * @mbg.generated 2018-03-04 15:03:43
     */
    private Integer houseId;

    /**
     * 房屋名称
     *
     * @mbg.generated 2018-03-04 15:03:43
     */
    private String houseName;

    /**
     * 用户id(卖家)
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private Integer userId;

    /**
     * 用户名称(卖家)
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
    private Integer houseCountScore;

    /**
     * 评论
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private String houseComment;

    /**
     * 评分
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private Integer userCountScore;

    /**
     * 评论
     *
     * @mbg.generated 2018-03-04 14:39:32
     */
    private String userComment;
}