package com.wintop.ms.fs.tag.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.tag.bo.TagPageQO;
import com.wintop.ms.fs.tag.entity.Tag;
import com.wintop.ms.fs.tag.service.TagManager;

/**
 * 用户微服务Controller。
 */
@RestController
public class TagController {

    @Resource
    private TagManager tagManager;

    /**
     * 获取所有标签
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/tag/list", method = RequestMethod.GET)
    public ServiceResult<List<Tag>> list(TagPageQO qo) throws Exception{
        return tagManager.listByQuery(qo);
    }

    /**
     * 标签分页
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/tag/page", method = RequestMethod.GET)
    public Map<String, Object> page(TagPageQO qo) throws Exception{
        return tagManager.pageByQuery(Tag.class,qo,null);
    }

    /**
     * 获取详情
     * @param tagId
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/tag/selectById", method = RequestMethod.GET)
    public ServiceResult<Tag> selectOne(Integer tagId) throws Exception{
        return tagManager.selectByPrimaryKey(tagId);
    }

    /**
     * 标签新增
     * @param tag
     * @return
     */
    @PostMapping(value = "/tag/insert",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> insert(Tag tag) throws  Exception{
        if("on".equals(tag.getState())){
            tag.setState("开启");
        }else {
            tag.setState("关闭");
        }
        tag.setCreateTime(new Date());
        return tagManager.insert(tag);
    }

    /**
     * 标签修改
     * @param tag
     * @return
     */
    @PostMapping(value = "/tag/update",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> update(Tag tag) throws  Exception{
        if("on".equals(tag.getState())){
            tag.setState("开启");
        }else {
            tag.setState("关闭");
        }
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


