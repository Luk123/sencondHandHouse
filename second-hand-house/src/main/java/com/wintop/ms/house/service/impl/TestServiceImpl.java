package com.wintop.ms.house.service.impl;

import com.wintop.core.bean.ServiceResult;
import com.wintop.ms.house.entity.Test;
import com.wintop.ms.house.mapper.ITestDao;
import com.wintop.ms.house.service.ITestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("testService")
public class TestServiceImpl implements ITestService {
    @Resource
    private ITestDao testDao;
    private static final Logger logger = LoggerFactory.getLogger(TestServiceImpl.class);

    @Override
    public ServiceResult<List<Test>> selectAll() {
        ServiceResult<List<Test>> result=new ServiceResult<>();
        try {
            result.setSuccess(true);
            result.setResult(testDao.selectAll());
        }catch (Exception e){
            result.setSuccess(false);
            result.setResult(null);
            e.printStackTrace();
        }
        return result;
    }
}