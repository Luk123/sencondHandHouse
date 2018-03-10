package com.wintop.ms.common.test;

import com.alibaba.fastjson.JSON;
import com.wintop.ms.fs.tag.entity.Tag;

import java.util.Date;

/**
 * @author mark
 * @since 2018/3/10
 */
public class json {

    public static void main(String[] args){
        Tag t = new Tag();
        t.setTagName("近医院");
        t.setCreateTime(new Date());
        t.setRemark("wu");
        t.setState("启用");
        String j = JSON.toJSONString(t);
        System.out.print(j);
    }

}
