/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.userfavorite.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * This class corresponds to the database table user_favorite
 *
 * @mbg.generated 2018-03-04 15:07:04
 */
@EqualsAndHashCode(callSuper = false)
public class UserFavorite extends BsData {
    /**
     * 关注ID
     *
     * @mbg.generated 2018-03-04 15:07:04
     */
    private Integer favoriteId;

    /**
     * 关注房屋ID
     *
     * @mbg.generated 2018-03-04 15:07:04
     */
    private Integer houseId;

    /**
     * 关注房屋名称
     *
     * @mbg.generated 2018-03-04 15:07:04
     */
    private String houseName;

    /**
     * 关注人
     *
     * @mbg.generated 2018-03-04 15:07:04
     */
    private Integer userId;

    /**
     * 关注人名称
     *
     * @mbg.generated 2018-03-04 15:07:04
     */
    private String userName;

    /**
     * 状态：关注，取消
     *
     * @mbg.generated 2018-03-04 15:07:04
     */
    private String state;

    /**
     * 关注时间
     *
     * @mbg.generated 2018-03-04 15:07:04
     */
    private Date createTime;

    public Integer getFavoriteId() {
        return favoriteId;
    }

    public void setFavoriteId(Integer favoriteId) {
        this.favoriteId = favoriteId;
    }

    public Integer getHouseId() {
        return houseId;
    }

    public void setHouseId(Integer houseId) {
        this.houseId = houseId;
    }

    public String getHouseName() {
        return houseName;
    }

    public void setHouseName(String houseName) {
        this.houseName = houseName;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}