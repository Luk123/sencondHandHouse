package com.wintop.ms.fs.userscore.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.userscore.entity.UserScore;
import com.wintop.ms.fs.userscore.mapper.UserScoreDAO;
import org.springframework.stereotype.Service;

@Service("userScoreManager")
public class UserScoreManager extends BsManager<UserScoreDAO, UserScore> {

}