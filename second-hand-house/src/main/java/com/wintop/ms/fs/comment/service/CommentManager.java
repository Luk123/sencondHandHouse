package com.wintop.ms.fs.comment.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.comment.entity.Comment;
import com.wintop.ms.fs.comment.mapper.CommentDAO;
import org.springframework.stereotype.Service;

@Service("commentManager")
public class CommentManager extends BsManager<CommentDAO, Comment> {

}