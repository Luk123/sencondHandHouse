/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.housescore.bo;

import com.wintop.ms.common.base.BsQO;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table house_score
 *
 * @mbg.generated 2018-03-04 14:39:32
 */
@SuppressWarnings("serial")
@Data
@EqualsAndHashCode(callSuper = false)
public class HouseScoreListQO extends BsQO {

	/**
	 * 房屋id
	 *
	 * @mbg.generated 2018-03-04 14:39:32
	 */
	private Integer houseId;

}