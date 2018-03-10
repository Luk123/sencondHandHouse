package com.wintop.ms.fs.tag.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.tag.bo.TagPageQO;
import com.wintop.ms.fs.tag.entity.Tag;
import com.wintop.ms.fs.tag.service.TagManager;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * 用户微服务Controller。
 */
@RestController
public class TagController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(TagController.class);

    @Resource
    private TagManager tagManager;

    /**
     * 获取所有标签
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/tag/list", method = RequestMethod.GET)
    public ServiceResult<List<Tag>> list(BsQO qo) throws Exception{
        return tagManager.listByQuery(qo);
    }

    /**
     * 标签分页
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/tag/page", method = RequestMethod.GET)
    public ServiceResult<Pager> page(TagPageQO qo) throws Exception{
        return tagManager.pageByQuery(Tag.class,qo,null);
    }

    /**
     * 标签新增
     * @param tag
     * @return
     */
    @PostMapping(value = "/tag/insert",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> insert(@RequestBody Tag tag) throws  Exception{
        return tagManager.insert(tag);
    }

    /**
     * 标签修改
     * @param tag
     * @return
     */
    @PostMapping(value = "/tag/update",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> update(@RequestBody Tag tag) throws  Exception{
        return tagManager.updateSelective(tag);
    }

    /**
     * 标签刪除
     * @param tagId
     * @return
     */
    @RequestMapping(value = "/tag/delete", method = RequestMethod.GET)
    public ServiceResult<Integer> delete(Integer tagId) throws  Exception{
        return tagManager.deleteByPrimaryKey(tagId);
    }
}


