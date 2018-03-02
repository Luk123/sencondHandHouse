package com.wintop.ms.house.controller;
import com.wintop.core.bean.ServiceResult;
import com.wintop.ms.house.entity.Test;
import com.wintop.ms.house.service.ITestService;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * 用户微服务Controller。

 */
@RestController
public class TestController {
    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(TestController.class);

    @Resource
    private ITestService testService;

    @RequestMapping(value = "/house/list",/*指定请求的实际地址，；*/
            method=RequestMethod.GET)/*指定请求的method类型， GET、POST、PUT、DELETE等；*/
           // headers="token",/* 指定request中必须包含某些指定的header值，才能让该方法处理请求。*/
//			params="age=20",/*指定request中必须包含某些参数值是，才让该方法处理。*/
//            consumes="application/json; charset=UTF-8",/*指定处理请求的提交内容类型（Content-Type），例如application/json, text/html;*/
//            produces="application/json; charset=UTF-8")/*指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回；*/
    public ServiceResult<List<Test>> findUserList() {
        Logger.info("查询数据");
        ServiceResult<List<Test>> result = new ServiceResult<>();
        result.setResult(testService.selectAll().getResult());
        result.setMessage("查询成功");
        return result;
    }


}


