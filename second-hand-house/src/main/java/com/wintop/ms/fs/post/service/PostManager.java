package com.wintop.ms.fs.post.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.post.entity.Post;
import com.wintop.ms.fs.post.mapper.PostDAO;
import org.springframework.stereotype.Service;

@Service("postManager")
public class PostManager extends BsManager<PostDAO, Post> {

}