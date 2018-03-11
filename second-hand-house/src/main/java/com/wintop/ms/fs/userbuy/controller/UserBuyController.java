package com.wintop.ms.fs.userbuy.controller;

import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.common.utils.DAOUtils;
import com.wintop.ms.fs.housescore.entity.HouseScore;
import com.wintop.ms.fs.housescore.service.HouseScoreManager;
import com.wintop.ms.fs.user.entity.User;
import com.wintop.ms.fs.user.service.UserManager;
import com.wintop.ms.fs.userbuy.bo.InsertUserBuyDTO;
import com.wintop.ms.fs.userbuy.bo.UserBuyQO;
import com.wintop.ms.fs.userbuy.entity.UserBuy;
import com.wintop.ms.fs.userbuy.service.UserBuyManager;
import com.wintop.ms.fs.userscore.entity.UserScore;
import com.wintop.ms.fs.userscore.service.UserScoreManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author zhangzijuan
 * @Description:用户购买
 * @date 2018-03-10
 */
@RestController
public class UserBuyController {

    @Resource
    private UserManager userManager;

    @Resource
    private UserBuyManager userBuyManager;

    @Resource
    private UserScoreManager userScoreManager;

    @Resource
    private HouseScoreManager houseScoreManager;

    /**
     * 用户购买记录分页
     * @return list集合
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userBuy/page",produces="application/json; charset=UTF-8")
    public ServiceResult<Pager> pageByQuery(UserBuyQO qo){
        return userBuyManager.pageByQuery(UserBuy.class, qo,null);
    }

    /**
     * 根据购买id查看详情
     * @author zhangzijuan
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userBuy/getBuyInfoById",produces="application/json; charset=UTF-8")
    public ServiceResult<UserBuy> getBuyInfoById(Integer userBuyId){
        return userBuyManager.selectByPrimaryKey(userBuyId);
    }

    /**
     * 评论卖家及房屋
     * @author mark
     * @Date 2018-03-10
     */
    @PostMapping(value = "/userBuy/desc/sale",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> descSaleUser(@RequestBody InsertUserBuyDTO dto) throws  Exception{
       // insert user score
        UserScore us = DAOUtils.cloneBean(UserScore.class,dto);
        us.setCountScore(dto.getUserCountScore());
        us.setComment(dto.getUserComment());
        ServiceResult<Integer> res =userScoreManager.insert(us);
        // insert house score
        HouseScore hs = DAOUtils.cloneBean(HouseScore.class,dto);
        hs.setComment(dto.getHouseComment());
        hs.setCountScore(dto.getHouseCountScore());
        houseScoreManager.insert(hs);
        // update user count score
        Integer num = userManager.selectByPrimaryKey(dto.getUserId()).getResult().getIntegralNum();
        User user = new User();
        user.setUserId(dto.getUserId());
        user.setIntegralNum(num + dto.getUserCountScore());
        userManager.updateSelective(user);
        return res;
    }
}
