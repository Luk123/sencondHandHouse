package com.wintop.ms.fs.userbuy.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.userbuy.entity.UserBuy;
import com.wintop.ms.fs.userbuy.mapper.UserBuyDAO;
import org.springframework.stereotype.Service;

@Service("userBuyManager")
public class UserBuyManager extends BsManager<UserBuyDAO, UserBuy> {

}