package com.wintop.ms.fs.userfavorite.controller;

import com.github.pagehelper.PageInfo;
import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.userfavorite.bo.UserFavoriteQO;
import com.wintop.ms.fs.userfavorite.entity.UserFavorite;
import com.wintop.ms.fs.userfavorite.service.UserFavoriteManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Date;
import java.util.Map;

/**
 * @author zhangzijuan
 * @Description:用户收藏
 * @date 2018-03-10
 */
@RestController
public class UserFavoriteController {
    @Resource
    private UserFavoriteManager favoriteManager;

    /**
     * 用户关注记录分页
     * @return list集合
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userFavorite/page",produces="application/json; charset=UTF-8")
    public Map<String, Object> pageByQuery(UserFavoriteQO qo){
        return favoriteManager.pageByQuery(UserFavorite.class, qo,null);
    }
    /**
     * 根据关注记录id查看详情
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userFavorite/getFavoriteInfoById",produces="application/json; charset=UTF-8")
    public ServiceResult<UserFavorite> getFavoriteInfoById(Integer favoriteId){
        return favoriteManager.selectByPrimaryKey(favoriteId);
    }


    /**
     * 保存收藏记录
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userFavorite/saveFavorite",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> saveFavorite(UserFavorite favorite){
        favorite.setCreateTime(new Date());
        favorite.setState("关注");
        return favoriteManager.insertSelective(favorite);
    }

    /**
     * 删除收藏记录
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userFavorite/deleteFavoriteById",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> deleteFavoriteById(Integer favoriteId){
        return favoriteManager.deleteByPrimaryKey(favoriteId);
    }
    /**
     * 取消收藏
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userFavorite/cancelFavorite",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> cancelFavorite(Integer userId,Integer houseId){
        return favoriteManager.cancelFavorite(userId,houseId);
    }

}
