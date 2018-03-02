package com.wintop.ms.house.entity;

import java.io.Serializable;
import java.util.Date;

public class Test implements Serializable {
    private static final long serialVersionUID = -2925788042202341921L;
    /**
     * 用户注册ID
     */
    private Long id;

    /**
     * 用户名，
     */
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}