/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.userfavorite.mapper;

import com.wintop.ms.common.base.BsDao;
import com.wintop.ms.fs.userfavorite.entity.UserFavorite;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface UserFavoriteDAO extends BsDao<UserFavorite> {

    Integer cancelFavorite(@Param("userId") Integer userId,@Param("houseId") Integer houseId);

    Integer selectByUserIdHouseId(@Param("userId") Integer userId,@Param("houseId") Integer houseId);

}