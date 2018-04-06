/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.user.bo;

import com.wintop.ms.common.base.PageQO;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table user
 *
 * @mbg.generated 2018-03-04 15:00:20
 */
@SuppressWarnings("serial")
@Data
@EqualsAndHashCode(callSuper = false)
public class UserPageQO extends PageQO {

    /**
     * 用户名
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private String userName;

    /**
     * 联系方式
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private String contactWay;

    /**
     * 身份证号
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private String certNo;

    /**
     * 性别：女 男 保密
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private String sex;

    /**
     * 积分数量
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private Integer integralNumBegin;
    private Integer integralNumEnd;

    /**
     * 账号
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private String account;

}