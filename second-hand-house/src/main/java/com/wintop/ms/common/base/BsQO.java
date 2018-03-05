package com.wintop.ms.common.base;

import lombok.Data;

import java.io.Serializable;

/**
 * 查询参数基础类
 * author mark
 * Date 2018/3/3
 */
@Data
public class BsQO implements Serializable{

    private static final long serialVersionUID = 1L;

    protected Integer defaultFlag;

}
