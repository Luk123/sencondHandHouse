package com.wintop.ms.fs.post.controller;

import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.common.utils.DAOUtils;
import com.wintop.ms.fs.comment.bo.CommentPageQO;
import com.wintop.ms.fs.comment.entity.Comment;
import com.wintop.ms.fs.comment.service.CommentManager;
import com.wintop.ms.fs.post.bo.PostPageBO;
import com.wintop.ms.fs.post.bo.PostPageQO;
import com.wintop.ms.fs.post.entity.Post;
import com.wintop.ms.fs.post.service.PostManager;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Date;
import java.util.Map;

/**
 * 用户微服务Controller。
 */
@RestController
public class PostController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(PostController.class);

    @Resource
    private PostManager postManager;

    @Resource
    private CommentManager commentManager;

    /**
     * 分页
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/post/page", method = RequestMethod.GET)
    public Map<String, Object> page(PostPageQO qo) throws Exception{
        return postManager.pageByQuery(Post.class,qo,null);
    }



    /**
     * 获取详情
     * @param postId
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/post/selectById", method = RequestMethod.GET)
    public ServiceResult<PostPageBO> selectOne(Integer postId) throws Exception{
        ServiceResult<PostPageBO> result=new ServiceResult<>();
        //
        Post post =  postManager.selectByPrimaryKey(postId).getResult();
        PostPageBO pb = DAOUtils.cloneBean(PostPageBO.class,post);
        //
        CommentPageQO qo = new CommentPageQO();
        qo.setPageSize(10);
        qo.setPostId(postId);
        Map<String, Object> map =commentManager.pageByQuery(Comment.class,qo,null);
        pb.setMap(map);
        //
        result.setMessage("查询数据成功");
        result.setSuccess(true);
        result.setResult(pb);
        return result;
    }

    /**
     * 新增
     * @param post
     * @return
     */
    @PostMapping(value = "/post/insert",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> insert(Post post) throws  Exception{
        post.setCreateTime(new Date());
        post.setState("审核中");
        return postManager.insert(post);
    }

    /**
     * 刪除
     * @param postId
     * @return
     */
    @RequestMapping(value = "/post/delete", method = RequestMethod.GET)
    public ServiceResult<Integer> delete(Integer postId) throws  Exception{
        return postManager.deleteByPrimaryKey(postId);
    }

    /**
     * 审批
     * @param post
     * @return
     */
    @PostMapping(value = "/post/update",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> update(Post post) throws  Exception{
        if("on".equals(post.getState())){
            post.setState("审批通过");
        }else {
            post.setState("驳回");
        }
        return postManager.updateSelective(post);
    }
}


