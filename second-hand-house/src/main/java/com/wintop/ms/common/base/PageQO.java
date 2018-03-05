package com.wintop.ms.common.base;

import lombok.Data;

import java.io.Serializable;

/**
 * 分页查询参数基础类
 * author mark
 * Date 2018/3/3
 */
@Data
public class PageQO extends BsQO{

    // 页码
    protected int pageNum = 0;

    // 每页显示数量
    protected int pageSize = 10;

}
