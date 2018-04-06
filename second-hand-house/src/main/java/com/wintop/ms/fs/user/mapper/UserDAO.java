/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.user.mapper;

import java.util.Map;

import org.springframework.stereotype.Repository;

import com.wintop.ms.common.base.BsDao;
import com.wintop.ms.fs.user.entity.User;

@Repository
public interface UserDAO extends BsDao<User> {

    User checkRepeat(Map<String,Object> map);

    User selectByUserNameAndPwd(Map<String,Object> map);

}