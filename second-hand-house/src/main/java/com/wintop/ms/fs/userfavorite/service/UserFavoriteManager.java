package com.wintop.ms.fs.userfavorite.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.userfavorite.entity.UserFavorite;
import com.wintop.ms.fs.userfavorite.mapper.UserFavoriteDAO;
import org.springframework.stereotype.Service;

@Service("userFavoriteManager")
public class UserFavoriteManager extends BsManager<UserFavoriteDAO, UserFavorite> {

}