/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.district.bo;

import com.wintop.ms.common.base.PageQO;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * This class corresponds to the database table district
 *
 * @mbg.generated 2018-03-04 14:05:21
 */
@SuppressWarnings("serial")
@Data
@EqualsAndHashCode(callSuper = false)
public class DistrictPageQO extends PageQO {

    /**
     * 行政区划名称
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private String districtName;

    /**
     * 类型: 1:省, 2:市, 3: 县(区)
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private Integer districtType;

    private String districtTypeName;

    public void setDistrictTypeName(String districtTypeName){
        this.districtTypeName=districtTypeName;
        if("省".equals(districtTypeName)){
            this.districtType = 1;
        }else if("市".equals(districtTypeName)){
            this.districtType = 2;
        }else if("县(区)".contains(districtTypeName)){
            this.districtType = 3;
        }
    }
    /**
     * 状态: 1:正常, 2:撤销
     *
     * @mbg.generated 2018-03-04 14:05:21
     */
    private Integer state;

}