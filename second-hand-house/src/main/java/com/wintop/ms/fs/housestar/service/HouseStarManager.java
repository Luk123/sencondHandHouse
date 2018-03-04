package com.wintop.ms.fs.housestar.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.housestar.entity.HouseStar;
import com.wintop.ms.fs.housestar.mapper.HouseStarDAO;
import org.springframework.stereotype.Service;

@Service("houseStarManager")
public class HouseStarManager extends BsManager<HouseStarDAO, HouseStar> {

}