//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.wintop.ms.common.base;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

public  class  Pager<K> implements Serializable {

    private static final long serialVersionUID = -5857027730230528482L;

    protected Long count;

    protected List<K> list;

    protected String msg ;

    protected Boolean rel;

    public Pager() {
    }

    public Pager(Long count, List<K> list, String msg, Boolean rel) {
        this.count = count;
        this.list = list;
        this.msg = msg;
        this.rel = rel;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }

    public List<K> getList() {
        return list;
    }

    public void setList(List<K> list) {
        this.list = list;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Boolean getRel() {
        return rel;
    }

    public void setRel(Boolean rel) {
        this.rel = rel;
    }
}
