package com.wintop.ms.fs.housesale.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.housesale.entity.HouseSale;
import com.wintop.ms.fs.housesale.mapper.HouseSaleDAO;
import org.springframework.stereotype.Service;

@Service("houseSaleManager")
public class HouseSaleManager extends BsManager<HouseSaleDAO, HouseSale> {

}