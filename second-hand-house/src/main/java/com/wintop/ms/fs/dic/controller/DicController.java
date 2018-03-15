package com.wintop.ms.fs.dic.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.dic.bo.DicPageQO;
import com.wintop.ms.fs.dic.entity.Dic;
import com.wintop.ms.fs.dic.service.DicManager;
import com.wintop.ms.fs.house.bo.HousePageBO;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 用户微服务Controller。
 */
@RestController
public class DicController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(DicController.class);

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


