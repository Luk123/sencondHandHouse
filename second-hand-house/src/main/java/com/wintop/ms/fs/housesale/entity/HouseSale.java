/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housesale.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.util.Date;

/**
 * This class corresponds to the database table house_sale
 *
 * @mbg.generated 2018-03-04 14:33:56
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class HouseSale extends BsData{
    /**
     * 房屋售卖表id
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private Integer houseSaleId;

    /**
     * 房屋id
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private Integer houseId;

    /**
     * 房屋名称
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private String houseName;

    /**
     * 购买人id
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private Integer custId;

    /**
     * 购买人名称
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private String custName;

    /**
     * 房屋所有人id
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private Integer ownerId;

    /**
     * 房屋所有人名称
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private String ownerName;

    /**
     * 售卖原因
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private String reason;

    /**
     * 售卖价格
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private BigDecimal salePrice;

    /**
     * 售卖时间
     *
     * @mbg.generated 2018-03-04 14:33:56
     */
    private Date saleTime;


}