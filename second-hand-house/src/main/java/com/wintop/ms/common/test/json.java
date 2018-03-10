package com.wintop.ms.common.test;

import com.alibaba.fastjson.JSON;
import com.wintop.ms.fs.district.entity.District;
import com.wintop.ms.fs.tag.entity.Tag;

import java.util.Date;

/**
 * @author mark
 * @since 2018/3/10
 */
public class json {

    public static void main(String[] args){
        District t = new District();
        t.setDistrictCode("ceshi");
        t.setDistrictName("ceshi");
        t.setDistrictType(1);
        t.setParentId(0L);
        t.setPinyinCode("ceshi");
        t.setShortCode("ceshi");
        t.setState(1);
        String j = JSON.toJSONString(t);
        System.out.print(j);
    }

}
