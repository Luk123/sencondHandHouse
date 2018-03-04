package com.wintop.ms.fs.house.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.house.entity.House;
import com.wintop.ms.fs.house.mapper.HouseDAO;
import org.springframework.stereotype.Service;

@Service("houseManager")
public class HouseManager extends BsManager<HouseDAO, House> {

}