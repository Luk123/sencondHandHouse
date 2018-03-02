package com.wintop.ms.house.service;
import com.wintop.ms.house.entity.ServiceResult;
import com.wintop.ms.house.entity.Test;

import java.util.List;

/**
 * 业务层
 * @author zhangzijuan
 * @date 2018-03-02
 */
public interface ITestService {
    ServiceResult<List<Test>> selectAll();
   
}