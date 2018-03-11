package com.wintop.ms.common.test;

import com.alibaba.fastjson.JSON;
import com.wintop.ms.fs.dic.entity.Dic;
import com.wintop.ms.fs.district.entity.District;
import com.wintop.ms.fs.tag.entity.Tag;

import java.util.Date;

/**
 * @author mark
 * @since 2018/3/10
 */
public class json {

    public static void main(String[] args){
        Dic t = new Dic();
       t.setCreateTime(new Date());
        t.setDicClsName("性別");
        t.setDicName("女");
        t.setRemark("beizhu");
        t.setState("启用");
        String j = JSON.toJSONString(t);
        System.out.print(j);
    }

}
