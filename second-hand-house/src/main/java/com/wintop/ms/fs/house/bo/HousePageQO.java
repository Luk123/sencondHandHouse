/*
 * $Id:$
 * Copyright 2017 ecarpo.com All rights reserved.
 */
package com.wintop.ms.fs.house.bo;

import com.wintop.ms.common.base.PageQO;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.util.Date;

/**
 * This class corresponds to the database table house
 *
 * @mbg.generated 2018-03-04 14:18:04
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class HousePageQO extends PageQO{

    private Integer userId;

    /**
     * 所在省
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String provice;

    /**
     * 所在市
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String city;

    /**
     * district：区/县
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String district;

    /**
     * salePriceEnd：房屋售价
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private BigDecimal salePriceBegin;
    private BigDecimal salePriceEnd;

    /**
     * areaEnd：建筑面积
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Double areaBegin;
    private Double areaEnd;

    /**
     * houseHall：房屋户型,例子：3室2厅1厨1卫
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String houseHall;

    /**
     * houseType：房屋类型（1普通住宅，2公寓、3别墅、5平房、5其他）
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String houseType;


    /**
     * floor：楼层
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String floor;

    public void setFloor(String floor){
        this.floor = floor;
        if("低楼层".equals(floor)){
          this.floorBegin = 0;
            this.floorEnd = 10;
        }else if("中楼层".equals(floor)){
            this.floorBegin = 10;
            this.floorEnd = 20;
        }else if("高楼层".equals(floor)){
            this.floorBegin = 20;
        }
    }

    private Integer floorBegin;

    private Integer floorEnd;

    /**
     * direction：房屋朝向
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String direction;

    /**
     * houseAgeEnd：房龄，不存储，根据建造年份计算
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private Integer houseAgeBegin;

    private Integer houseAgeEnd;

    private Date houseBeginTime;

    private Date houseEndTime;

    public void setHouseAgeBegin(Integer houseAgeBegin){
        this.houseAgeBegin = houseAgeBegin;
        if(houseAgeBegin != null){
            Date now = new Date();
            Long ftime = (now.getTime()/1000) - 60*60*24*365*houseAgeBegin;
            now.setTime(ftime*1000);
            this.houseBeginTime = now;
        }
    }

    public void setHouseAgeEnd(Integer houseAgeEnd){
        this.houseAgeEnd = houseAgeEnd;
        if(houseAgeEnd != null){
            Date now = new Date();
            Long ftime = (now.getTime()/1000) - 60*60*24*365*houseAgeEnd;
            now.setTime(ftime*1000);
            this.houseEndTime = now;
        }
    }


    /**
     * renovation：装修（精装修、豪华装修、普通装修、毛坯）
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String renovation;

    /**
     * tagName：标签
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String tagName;

    /**
     * 房屋状态 1未发布  2售卖中 3已售
     *
     * @mbg.generated 2018-03-04 14:18:04
     */
    private String state = "售卖中";

    /**
     * createFlag：排序标识
     */
    private Integer priceFlag;
    private Integer unitPriceFlag;
    private Integer areaFlag;
    private Integer createFlag;
 }