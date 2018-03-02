package com.wintop.ms.common.utils;

/**
 * @author mark
 * @since 2018/3/3
 */
public interface IObjectCallBack<T> {
    public abstract void callback(T t) throws Exception;
}
