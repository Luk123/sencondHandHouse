package com.wintop.ms.fs.house.service;

import com.github.pagehelper.PageInfo;
import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.house.bo.HousePageBO;
import com.wintop.ms.fs.house.bo.HousePageQO;
import com.wintop.ms.fs.house.entity.House;
import com.wintop.ms.fs.house.mapper.HouseDAO;
import org.springframework.stereotype.Service;

@Service("houseManager")
public class HouseManager extends BsManager<HouseDAO, House> {
    /**
     * 获取房屋分页
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    public ServiceResult<PageInfo> pageByQuery(HousePageQO qo){
        return super.pageByQuery(HousePageBO.class, qo,null);
    }
}