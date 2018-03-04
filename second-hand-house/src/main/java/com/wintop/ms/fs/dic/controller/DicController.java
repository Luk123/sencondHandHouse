package com.wintop.ms.fs.dic.controller;

import com.wintop.ms.common.base.BsQO;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.dic.entity.Dic;
import com.wintop.ms.fs.dic.service.DicManager;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * 用户微服务Controller。
 */
@RestController
public class DicController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(DicController.class);

    @Resource
    private DicManager dicManager;


    @RequestMapping(value = "/dic/list", method = RequestMethod.GET)
    public ServiceResult<List<Dic>> list(BsQO qo) throws Exception{
        return new ServiceResult<>(true,dicManager.listByQuery(qo));
    }

}


