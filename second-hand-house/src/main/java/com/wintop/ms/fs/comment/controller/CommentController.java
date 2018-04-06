package com.wintop.ms.fs.comment.controller;

import java.util.Date;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.comment.bo.CommentPageQO;
import com.wintop.ms.fs.comment.entity.Comment;
import com.wintop.ms.fs.comment.service.CommentManager;
import com.wintop.ms.fs.post.entity.Post;
import com.wintop.ms.fs.post.service.PostManager;
import com.wintop.ms.fs.user.entity.User;
import com.wintop.ms.fs.user.service.UserManager;

/**
 * 用户微服务Controller。
 */
@RestController
public class CommentController {

    @Resource
    private CommentManager commentManager;

    @Resource
    private PostManager postManager;

    @Resource
    private UserManager userManager;

    /**
     * 分页
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/comment/page", method = RequestMethod.GET)
    public Map<String, Object> page(CommentPageQO qo) throws Exception{
        return commentManager.pageByQuery(Comment.class,qo,null);
    }

    /**
     * 新增
     * @param comment
     * @return
     */
    @PostMapping(value = "/comment/insert",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> insert(Comment comment) throws  Exception{
        comment.setCreateTime(new Date());
        if (comment.getCreateId()!=null){
            User user=userManager.selectByPrimaryKey(comment.getCreateId()).getResult();
            if (user!=null){
                comment.setCreateName(user.getUserName());
                comment.setCreatePhoto(user.getUserPhotoAddr());
            }else {
                return new ServiceResult<>(false,"获取不到用户信息");
            }
        }else{
            return new ServiceResult<>(false,"请先登陆！");
        }
        return commentManager.insert(comment);
    }

    /**
     * 刪除
     * @param comment
     * @return
     */
    @PostMapping(value = "/comment/delete",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> delete(Comment comment) throws  Exception{
        Integer commentId = comment.getCommentId();
        //
        Post db = postManager.selectByPrimaryKey(comment.getPostId()).getResult();
        if(db == null){
            return commentManager.deleteByPrimaryKey(commentId);
        }
        if(db.getCreateId() != comment.getCreateId()){
            ServiceResult<Integer> result=new ServiceResult<>();
            result.setMessage("非发帖人禁止删除");
            result.setSuccess(false);
            return result;
        }
        return commentManager.deleteByPrimaryKey(commentId);
    }
}


