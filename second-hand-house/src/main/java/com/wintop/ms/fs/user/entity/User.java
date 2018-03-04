/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.user.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * This class corresponds to the database table user
 *
 * @mbg.generated 2018-03-04 15:00:20
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class User extends BsData {
    /**
     * 用户id
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private Integer userId;

    /**
     * 用户名
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private String userName;

    /**
     * 用户照片
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private String userPhotoAddr;

    /**
     * 密码
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private String pwd;

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
     * 生日
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private Date birth;

    /**
     * 用户住址
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private String addr;

    /**
     * 积分数量
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private Integer integralNum;

    /**
     * 创建时间
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private Date createTime;

}