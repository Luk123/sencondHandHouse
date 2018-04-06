package com.wintop.ms.fs.dic.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.dic.bo.DicPageQO;
import com.wintop.ms.fs.dic.entity.Dic;
import com.wintop.ms.fs.dic.service.DicManager;

/**
 * 用户微服务Controller。
 */
@RestController
public class DicController {

    @Resource
    private DicManager dicManager;


    @RequestMapping(value = "/dic/list", method = RequestMethod.GET)
    public ServiceResult<List<Dic>> list(BsQO qo) throws Exception{
        return dicManager.listByQuery(qo);
    }

    /**
     * 字典分页
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/dic/page", method = RequestMethod.GET)
    public Map<String, Object> page(DicPageQO qo) throws Exception{
        return dicManager.pageByQuery(Dic.class,qo,null);
    }

    /**
     * 新增
     * @param dic
     * @return
     */
    @PostMapping(value = "/dic/insert",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> insert(Dic dic) throws  Exception{
        if("on".equals(dic.getState())){
            dic.setState("开启");
        }else {
            dic.setState("关闭");
        }
        dic.setCreateTime(new Date());
        return dicManager.insert(dic);
    }

    /**
     * 字典修改
     * @param dic
     * @return
     */
    @PostMapping(value = "/dic/update",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> update(Dic dic) throws  Exception{
        if("on".equals(dic.getState())){
            dic.setState("开启");
        }else {
            dic.setState("关闭");
        }
        return dicManager.updateSelective(dic);
    }

    /**
     * 字典刪除
     * @param dicId
     * @return
     */
    @RequestMapping(value = "/dic/delete", method = RequestMethod.GET)
    public ServiceResult<Integer> delete(Integer dicId) throws  Exception{
        return dicManager.deleteByPrimaryKey(dicId);
    }
    @RequestMapping(value = "/dic/selectById", method = RequestMethod.GET)
    public ServiceResult<Dic> selectById(Integer dicId) throws  Exception{
        return dicManager.selectByPrimaryKey(dicId);
    }
}


