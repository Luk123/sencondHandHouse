/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.userbuy.bo;

import com.wintop.ms.common.base.BsData;
import com.wintop.ms.common.base.PageQO;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.util.Date;

/**
 * This class corresponds to the database table user_buy
 *
 * @mbg.generated 2018-03-04 15:03:43
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class UserBuyQO extends PageQO {
    /**
     * 购买记录id
     *
     * @mbg.generated 2018-03-04 15:03:43
     */
    private Integer userBuyId;

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
     * 支付金额
     *
     * @mbg.generated 2018-03-04 15:03:43
     */
    private BigDecimal buyPrice;

    /**
     * 购买时间
     *
     * @mbg.generated 2018-03-04 15:03:43
     */
    private Date buyDate;

    /**
     * 购买者id
     *
     * @mbg.generated 2018-03-04 15:03:43
     */
    private Integer userId;

}