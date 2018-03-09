/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.user.mapper;

import com.wintop.ms.common.base.BsDao;
import com.wintop.ms.fs.user.entity.User;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public interface UserDAO extends BsDao<User> {

    User checkRepeat(Map<String,Object> map);

    User selectByUserNameAndPwd(Map<String,Object> map);

}