package com.wintop.ms.fs.test.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.test.entity.Test;
import com.wintop.ms.fs.test.mapper.ITestDao;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("testManager")
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