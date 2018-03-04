package com.wintop.ms.fs.dic.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.dic.entity.Dic;
import org.springframework.stereotype.Service;
import com.wintop.ms.fs.dic.mapper.DicDAO;

@Service("dicManager")
public class DicManager extends BsManager<DicDAO, Dic> {

}