package com.wintop.ms.fs.usersale.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.usersale.entity.UserSale;
import com.wintop.ms.fs.usersale.mapper.UserSaleDAO;
import org.springframework.stereotype.Service;

@Service("userSaleManager")
public class UserSaleManager extends BsManager<UserSaleDAO, UserSale> {

}