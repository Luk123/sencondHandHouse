/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.user.bo;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table user
 *
 * @mbg.generated 2018-03-04 15:00:20
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class UpdateUserScoreDTO extends BsData {
    /**
     * 用户id
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private Integer userId;


    /**
     * 积分数量
     *
     * @mbg.generated 2018-03-04 15:00:20
     */
    private Integer integralNum;

}