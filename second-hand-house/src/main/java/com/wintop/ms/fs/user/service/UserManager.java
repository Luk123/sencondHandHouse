package com.wintop.ms.fs.user.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.user.entity.User;
import com.wintop.ms.fs.user.mapper.UserDAO;
import org.springframework.stereotype.Service;

@Service("userManager")
public class UserManager extends BsManager<UserDAO, User> {

}