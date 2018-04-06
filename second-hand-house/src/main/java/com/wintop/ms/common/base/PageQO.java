package com.wintop.ms.common.base;

/**
 * 分页查询参数基础类
 * author mark
 * Date 2018/3/3
 */
@SuppressWarnings("serial")
public class PageQO extends BsQO{
    // 页码
    private int page = 0;

    // 每页显示数量
    private int pageSize = 5;

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }
}
