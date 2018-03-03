package com.wintop.ms.house.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.house.entity.Test;
import com.wintop.ms.house.service.TestManager;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * 用户微服务Controller。
 */
@RestController
public class TestControllerMa {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(TestControllerMa.class);

    @Resource
    private TestManager testManager;

    @RequestMapping(value = "/house/list", method = RequestMethod.GET)
    public ServiceResult<List<Test>> findUserList() {
        return testManager.selectAll();
    }

    @RequestMapping(value = "/house/list/test", method = RequestMethod.GET)
    public ServiceResult<List<Test>> list(BsQO qo) throws Exception{
        return new ServiceResult<>(true,testManager.listByQuery(qo));
    }
}


