/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.comment.entity;

import com.wintop.ms.common.base.BsData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * This class corresponds to the database table comment
 *
 * @mbg.generated 2018-03-19 21:27:16
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Comment extends BsData{
    /**
     * 评论id
     *
     * @mbg.generated 2018-03-19 21:27:16
     */
    private Integer commentId;

    /**
     * 评论内容
     *
     * @mbg.generated 2018-03-19 21:27:16
     */
    private String content;

    /**
     * 帖子id
     *
     * @mbg.generated 2018-03-19 21:27:16
     */
    private Integer postId;

    /**
     * 评论时间
     *
     * @mbg.generated 2018-03-19 21:27:16
     */
    private Date createTime;

    /**
     * 评论人id
     *
     * @mbg.generated 2018-03-19 21:27:16
     */
    private Integer createId;

    /**
     * 评论人名字
     *
     * @mbg.generated 2018-03-19 21:27:16
     */
    private String createName;

    /**
     * 评论人头像地址
     *
     * @mbg.generated 2018-03-19 21:27:16
     */
    private String createPhoto;

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public Integer getPostId() {
        return postId;
    }

    public void setPostId(Integer postId) {
        this.postId = postId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Integer getCreateId() {
        return createId;
    }

    public void setCreateId(Integer createId) {
        this.createId = createId;
    }

    public String getCreateName() {
        return createName;
    }

    public void setCreateName(String createName) {
        this.createName = createName == null ? null : createName.trim();
    }

    public String getCreatePhoto() {
        return createPhoto;
    }

    public void setCreatePhoto(String createPhoto) {
        this.createPhoto = createPhoto == null ? null : createPhoto.trim();
    }
}