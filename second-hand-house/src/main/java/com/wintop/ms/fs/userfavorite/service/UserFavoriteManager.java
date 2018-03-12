package com.wintop.ms.fs.userfavorite.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.userfavorite.entity.UserFavorite;
import com.wintop.ms.fs.userfavorite.mapper.UserFavoriteDAO;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("userFavoriteManager")
public class UserFavoriteManager extends BsManager<UserFavoriteDAO, UserFavorite> {
    @Resource
    private  UserFavoriteDAO favoriteDAO;
    public ServiceResult<Integer> cancelFavorite(Integer userId,Integer houseId) {
        ServiceResult<Integer> result=new ServiceResult<>();
        try {
            result.setMessage("删除数据成功");
            result.setSuccess(true);
            result.setResult(favoriteDAO.cancelFavorite(userId,houseId));
        } catch (Exception e) {
            result.setMessage("删除数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

}