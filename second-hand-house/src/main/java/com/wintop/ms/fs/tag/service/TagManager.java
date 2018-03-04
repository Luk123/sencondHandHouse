package com.wintop.ms.fs.tag.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.tag.entity.Tag;
import com.wintop.ms.fs.tag.mapper.TagDAO;
import org.springframework.stereotype.Service;

@Service("tagManager")
public class TagManager extends BsManager<TagDAO, Tag> {

}