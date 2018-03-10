package com.wintop.ms.fs.userscore.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.housescore.entity.HouseScore;
import com.wintop.ms.fs.housescore.mapper.HouseScoreDAO;
import org.springframework.stereotype.Service;

@Service("userScoreManager")
public class UserScoreManager extends BsManager<HouseScoreDAO, HouseScore> {

}