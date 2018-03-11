/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.usersale.bo;

import com.wintop.ms.common.base.BsData;
import com.wintop.ms.common.base.PageQO;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.util.Date;

/**
 * This class corresponds to the database table user_sale
 *
 * @mbg.generated 2018-03-04 15:10:31
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class UserSaleQO extends PageQO {
    /**
     * 用户销售记录id
     *
     * @mbg.generated 2018-03-04 15:10:31
     */
    private Integer userSaleId;

    /**
     * 房屋id
     *
     * @mbg.generated 2018-03-04 15:10:31
     */
    private Integer houseId;

    /**
     * 房屋名称
     *
     * @mbg.generated 2018-03-04 15:10:31
     */
    private String houseName;

    /**
     * 销售价格
     *
     * @mbg.generated 2018-03-04 15:10:31
     */
    private BigDecimal salePrice;

    /**
     * 销售时间
     *
     * @mbg.generated 2018-03-04 15:10:31
     */
    private Date saleTime;

    /**
     * 购买人id
     *
     * @mbg.generated 2018-03-04 15:10:31
     */
    private Integer custId;

    /**
     * 购买人名称
     *
     * @mbg.generated 2018-03-04 15:10:31
     */
    private String custName;

    /**
     * 房屋所有人id
     *
     * @mbg.generated 2018-03-04 15:10:31
     */
    private Integer ownerId;

    /**
     * 房屋所有人名称
     *
     * @mbg.generated 2018-03-04 15:10:31
     */
    private String ownerName;

 }