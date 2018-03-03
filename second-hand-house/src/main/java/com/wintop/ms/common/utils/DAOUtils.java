package com.wintop.ms.common.utils;

import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;


/**
 * author mark
 * 克隆属性及回调工具类
 */
public class DAOUtils {

    public static <T> T cloneBean(Class<T> type, Object src) throws Exception {
        return cloneBean(type, src, (IObjectCallBack<T>) null);
    }

    public static <T> T cloneBean(T t, Object src) throws Exception {
        return cloneBean(t, src, (IObjectCallBack<T>) null);
    }

    public static <T> T cloneBean(Class<T> type, Object src, IObjectCallBack<T> cb) throws Exception {
        if (src == null) {
            return null;
        }
        T t = type.newInstance();
        return cloneBean(t, src, cb);
    }

    public static <T> T cloneBean(T target, Object src, IObjectCallBack<T> cb) throws Exception {
        BeanUtils.copyProperties(src, target);
        if (cb != null) {
            cb.callback(target);
        }
        return target;
    }

    public static <T> List<T> cloneList(Class<T> type, List<?> listSrc) throws Exception {
        return cloneList(type, listSrc, (IObjectCallBack<T>) null);
    }

    public static <T> List<T> cloneList(Class<T> type, List<?> listSrc, IObjectCallBack<T> cb) throws Exception {
        if (listSrc == null) {
            return null;
        }
        List<T> listResult = new ArrayList<>();
        for (Object src : listSrc) {
            T target = type.newInstance();
            BeanUtils.copyProperties(src, target);
            if (cb != null) {
                cb.callback(target);
            }
            listResult.add(target);
        }
        return listResult;
    }

    public static <T> void callback(List<T> listSrc, IObjectCallBack<T> cb) throws Exception {
        if (listSrc == null) {
            return;
        }
        for (T t : listSrc) {
            if (cb != null) {
                cb.callback(t);
            }
        }
    }

}

