package com.wintop.ms.fs.test.mapper;

import com.wintop.ms.common.base.BsDao;
import com.wintop.ms.fs.test.entity.Test;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("testDao")
public interface ITestDao extends BsDao<Test> {

    List<Test> selectAll();
}