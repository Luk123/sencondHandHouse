package com.wintop.ms.house.mapper;

import com.wintop.ms.common.base.BsDao;
import com.wintop.ms.house.entity.Test;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ITestDao extends BsDao<Test> {

    List<Test> selectAll();
}