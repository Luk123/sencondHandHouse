package com.wintop.ms.fs.housetag.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.housetag.entity.HouseTag;
import com.wintop.ms.fs.housetag.mapper.HouseTagDAO;
import org.springframework.stereotype.Service;

@Service("houseTagManager")
public class HouseTagManager extends BsManager<HouseTagDAO, HouseTag> {

}