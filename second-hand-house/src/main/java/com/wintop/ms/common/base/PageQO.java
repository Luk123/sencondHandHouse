package com.wintop.ms.common.base;

import lombok.Data;

import java.io.Serializable;

/**
 * 分页查询参数基础类
 * author mark
 * Date 2018/3/3
 */
public class PageQO extends BsQO{

    // 页码
    protected int pageIndex  = 0;

    // 每页显示数量
    protected int pageSize = 10;

    public int getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(int pageIndex) {
        this.pageIndex = pageIndex;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }
}
