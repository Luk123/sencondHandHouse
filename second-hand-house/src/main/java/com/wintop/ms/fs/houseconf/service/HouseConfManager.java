package com.wintop.ms.fs.houseconf.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.houseconf.entity.HouseConf;
import com.wintop.ms.fs.houseconf.mapper.HouseConfDAO;
import org.springframework.stereotype.Service;

@Service("houseConfManager")
public class HouseConfManager extends BsManager<HouseConfDAO, HouseConf> {

}