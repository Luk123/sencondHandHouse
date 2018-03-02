package com.wintop.ms.house.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class Test extends BsData {
    private static final long serialVersionUID = -2925788042202341921L;
    /**
     * 用户注册ID
     */
    private Long id;

    /**
     * 用户名，
     */
    private String name;

}