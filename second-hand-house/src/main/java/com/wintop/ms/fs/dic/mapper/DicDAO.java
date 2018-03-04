/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.dic.mapper;

import com.wintop.ms.common.base.BsDao;
import com.wintop.ms.fs.dic.entity.Dic;
import org.springframework.stereotype.Repository;
@Repository("dicDAO")
public interface DicDAO extends BsDao<Dic> {

}