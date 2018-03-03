package com.wintop.ms.fs.test.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.test.entity.Test;
import com.wintop.ms.fs.test.service.TestManager;
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

    @RequestMapping(value = "/test/list", method = RequestMethod.GET)
    public ServiceResult<List<Test>> findUserList() {
        return testManager.selectAll();
    }

    @RequestMapping(value = "/test/list/test", method = RequestMethod.GET)
    public ServiceResult<List<Test>> list(BsQO qo) throws Exception{
        return new ServiceResult<>(true,testManager.listByQuery(qo));
    }

}


