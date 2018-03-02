package com.wintop.ms.house.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.house.entity.Test;
import com.wintop.ms.house.mapper.ITestDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("testService")
public class TestManager extends BsManager<ITestDao, Test> {


    public ServiceResult<List<Test>> selectAll() {
        ServiceResult<List<Test>> result = new ServiceResult<>();
        try {
            result.setMessage("查询成功");
            result.setSuccess(true);
            result.setResult(mapper.selectAll());
        } catch (Exception e) {
            result.setMessage("查询失败");
            result.setSuccess(false);
            result.setResult(null);
            e.printStackTrace();
        }
        return result;
    }
}