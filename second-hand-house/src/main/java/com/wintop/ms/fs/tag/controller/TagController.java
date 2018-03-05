package com.wintop.ms.fs.tag.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.tag.entity.Tag;
import com.wintop.ms.fs.tag.service.TagManager;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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

}


