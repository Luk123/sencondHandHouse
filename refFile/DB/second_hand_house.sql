/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50632
Source Host           : localhost:3306
Source Database       : second_hand_house

Target Server Type    : MYSQL
Target Server Version : 50632
File Encoding         : 65001

Date: 2018-03-04 15:24:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dic
-- ----------------------------
DROP TABLE IF EXISTS `dic`;
CREATE TABLE `dic` (
  `dic_id` int(10) NOT NULL COMMENT '字典id',
  `dic_cls_name` varchar(50) NOT NULL COMMENT '字典类名称',
  `dic_name` varchar(50) NOT NULL COMMENT '字典名称',
  `state` varchar(50) NOT NULL COMMENT '状态: 停用;  启用',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_time` date NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`dic_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='字典表';

-- ----------------------------
-- Records of dic
-- ----------------------------
INSERT INTO `dic` VALUES ('1', '性别', '男', '启用', null, '2018-03-04');

-- ----------------------------
-- Table structure for district
-- ----------------------------
DROP TABLE IF EXISTS `district`;
CREATE TABLE `district` (
  `district_id` bigint(20) NOT NULL COMMENT '行政区划id',
  `parent_id` bigint(20) NOT NULL DEFAULT '0' COMMENT '上级id',
  `district_code` varchar(6) NOT NULL DEFAULT '' COMMENT '行政区划编码',
  `district_name` varchar(20) NOT NULL DEFAULT '' COMMENT '行政区划名称',
  `district_type` tinyint(3) NOT NULL COMMENT '类型: 1:省, 2:市, 3: 县(区)',
  `pinyin_code` varchar(100) DEFAULT '' COMMENT '拼音码',
  `short_code` varchar(20) DEFAULT '' COMMENT '速记码',
  `state` tinyint(3) NOT NULL COMMENT '状态: 1:正常, 2:撤销',
  PRIMARY KEY (`district_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of district
-- ----------------------------

-- ----------------------------
-- Table structure for house
-- ----------------------------
DROP TABLE IF EXISTS `house`;
CREATE TABLE `house` (
  `house_id` int(10) NOT NULL AUTO_INCREMENT,
  `house_name` varchar(50) NOT NULL COMMENT '房屋标题',
  `house_hall` varchar(20) NOT NULL DEFAULT ' ' COMMENT '房屋户型,例子：3室2厅1厨1卫',
  `area` double(10,2) NOT NULL COMMENT '建筑面积',
  `real_area` double(10,2) NOT NULL COMMENT '套内面积',
  `provice` varchar(20) NOT NULL DEFAULT '' COMMENT '所在省',
  `city` varchar(20) NOT NULL DEFAULT '' COMMENT '所在市',
  `district` varchar(20) NOT NULL DEFAULT '' COMMENT '区/县',
  `addr` varchar(255) NOT NULL DEFAULT '' COMMENT '详细地址',
  `build_type` varchar(20) DEFAULT NULL COMMENT '建筑类型：塔楼，板楼，板塔结合',
  `build_year` date NOT NULL COMMENT '建造年份',
  `house_type` varchar(20) NOT NULL COMMENT '房屋类型（1普通住宅，2公寓、3别墅、5平房、5其他）',
  `floor` int(10) NOT NULL DEFAULT '1' COMMENT '楼层',
  `sale_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '房屋售价',
  `direction` varchar(10) DEFAULT NULL COMMENT '房屋朝向',
  `renovation` varchar(20) DEFAULT NULL COMMENT '装修（精装修、豪华装修、普通装修、毛坯）',
  `unit_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '单价，例：10000 元/m2',
  `frist_pay` decimal(10,2) DEFAULT NULL COMMENT '参考首付',
  `month_pay` decimal(10,2) DEFAULT NULL COMMENT '参考月供',
  `owner_id` int(10) NOT NULL COMMENT '房主id',
  `owner_name` varchar(50) NOT NULL COMMENT '房主姓名',
  `contact_way` varchar(15) NOT NULL COMMENT '房主电话',
  `desc` varchar(500) NOT NULL DEFAULT '' COMMENT '房屋描述',
  `state` varchar(10) NOT NULL DEFAULT '1' COMMENT '房屋状态 1未发布  2售卖中 3已售',
  `major_addr` varchar(255) NOT NULL COMMENT '房屋主图地址',
  `remark` varchar(500) DEFAULT '' COMMENT '备注',
  `lift_flag` varchar(10) NOT NULL DEFAULT '无' COMMENT '有无电梯：有，无',
  `heat` varchar(20) NOT NULL DEFAULT '无供暖' COMMENT '供暖：集体供暖，自供暖，无供暖',
  `house_age` int(10) DEFAULT NULL COMMENT '房龄，不存储，根据建造年份计算',
  `house_no` varchar(50) NOT NULL COMMENT '不动产单元号（产权证号）,28位',
  `create_time` date NOT NULL COMMENT '创建时间',
  `create_id` int(10) NOT NULL COMMENT '房屋所有人id',
  `create_name` varchar(50) NOT NULL COMMENT '创建人名称',
  PRIMARY KEY (`house_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='房子基本信息表';

-- ----------------------------
-- Records of house
-- ----------------------------

-- ----------------------------
-- Table structure for house_conf
-- ----------------------------
DROP TABLE IF EXISTS `house_conf`;
CREATE TABLE `house_conf` (
  `house_id` int(10) NOT NULL COMMENT '房屋id',
  `house_name` varchar(50) NOT NULL COMMENT '房屋名称',
  `facility` varchar(500) NOT NULL DEFAULT '' COMMENT '小区设施',
  `life_conf` varchar(500) NOT NULL DEFAULT '' COMMENT '生活配套',
  `traffic` varchar(500) NOT NULL DEFAULT '' COMMENT '轨道交通',
  PRIMARY KEY (`house_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='房屋周边配套表（与房屋表共用主键）';

-- ----------------------------
-- Records of house_conf
-- ----------------------------

-- ----------------------------
-- Table structure for house_photo
-- ----------------------------
DROP TABLE IF EXISTS `house_photo`;
CREATE TABLE `house_photo` (
  `house_photo_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '房子相关图片id',
  `house_id` int(10) NOT NULL COMMENT '房屋id',
  `house_name` varchar(50) NOT NULL COMMENT '房屋名称',
  `type` varchar(10) NOT NULL DEFAULT '室内图' COMMENT '图片类型（室内图 户型图 环境图 周边地图）',
  `photo_addr` varchar(255) NOT NULL COMMENT '图片地址',
  `create_time` date NOT NULL COMMENT '创建时间',
  `create_id` int(10) NOT NULL COMMENT '创建人id',
  `create_name` varchar(50) NOT NULL COMMENT '创建人名字',
  PRIMARY KEY (`house_photo_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='房子相关图片表';

-- ----------------------------
-- Records of house_photo
-- ----------------------------

-- ----------------------------
-- Table structure for house_sale
-- ----------------------------
DROP TABLE IF EXISTS `house_sale`;
CREATE TABLE `house_sale` (
  `house_sale_id` int(10) NOT NULL COMMENT '房屋售卖表id',
  `house_id` int(10) NOT NULL COMMENT '房屋id',
  `house_name` varchar(50) NOT NULL COMMENT '房屋名称',
  `cust_id` int(10) NOT NULL COMMENT '购买人id',
  `cust_name` varchar(50) NOT NULL COMMENT '购买人名称',
  `owner_id` int(10) NOT NULL COMMENT '房屋所有人id',
  `owner_name` varchar(50) NOT NULL COMMENT '房屋所有人名称',
  `reason` varchar(50) NOT NULL COMMENT '售卖原因',
  `sale_price` decimal(10,2) NOT NULL COMMENT '售卖价格',
  `sale_time` date NOT NULL COMMENT '售卖时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='房屋售卖信息表';

-- ----------------------------
-- Records of house_sale
-- ----------------------------

-- ----------------------------
-- Table structure for house_score
-- ----------------------------
DROP TABLE IF EXISTS `house_score`;
CREATE TABLE `house_score` (
  `house_score_id` int(10) NOT NULL COMMENT '用户积分id',
  `house_id` int(10) NOT NULL COMMENT '房屋id',
  `house_name` varchar(50) NOT NULL COMMENT '房屋名称',
  `cust_id` int(10) NOT NULL COMMENT '评价人id',
  `cust_name` varchar(50) NOT NULL COMMENT '评价人名称',
  `count_score` bit(5) NOT NULL COMMENT '评分',
  `comment` varchar(500) NOT NULL COMMENT '房屋评论',
  PRIMARY KEY (`house_score_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='房屋评论表';

-- ----------------------------
-- Records of house_score
-- ----------------------------

-- ----------------------------
-- Table structure for house_star
-- ----------------------------
DROP TABLE IF EXISTS `house_star`;
CREATE TABLE `house_star` (
  `house_id` int(10) NOT NULL COMMENT '房屋id',
  `house_name` varchar(50) NOT NULL COMMENT '房屋名称',
  `abs` varchar(500) NOT NULL DEFAULT '' COMMENT '简介',
  `type_desc` varchar(500) NOT NULL DEFAULT '' COMMENT '户型介绍',
  `build_desc` varchar(500) NOT NULL DEFAULT '' COMMENT '装修描述',
  PRIMARY KEY (`house_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='房屋核心卖点表（与房屋表共用主键）';

-- ----------------------------
-- Records of house_star
-- ----------------------------

-- ----------------------------
-- Table structure for house_tag
-- ----------------------------
DROP TABLE IF EXISTS `house_tag`;
CREATE TABLE `house_tag` (
  `house_tag_id` int(10) NOT NULL COMMENT '房屋标签id',
  `house_id` int(10) NOT NULL COMMENT '房屋id',
  `house_name` varchar(50) NOT NULL COMMENT '房屋名称',
  `tag_id` int(10) NOT NULL COMMENT '标签id',
  `tag_name` varchar(50) NOT NULL COMMENT '标签名字',
  `create_time` date NOT NULL COMMENT '创建时间',
  `create_id` int(11) NOT NULL COMMENT '创建人id',
  `create_name` varchar(50) NOT NULL COMMENT '创建人名字',
  PRIMARY KEY (`house_tag_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='房屋标签表';

-- ----------------------------
-- Records of house_tag
-- ----------------------------

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `tag_id` int(10) NOT NULL COMMENT '标签id',
  `tag_name` varchar(50) NOT NULL COMMENT '标签名称',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_time` date NOT NULL COMMENT '创建时间',
  `state` varchar(10) NOT NULL DEFAULT '启用' COMMENT '状态：启用，停用',
  PRIMARY KEY (`tag_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='标签字典表';

-- ----------------------------
-- Records of tag
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_name` varchar(50) NOT NULL COMMENT '用户名',
  `user_photo_addr` varchar(255) DEFAULT NULL COMMENT '用户照片',
  `pwd` varchar(64) NOT NULL COMMENT '密码',
  `contact_way` varchar(15) DEFAULT NULL COMMENT '联系方式',
  `cert_no` varchar(20) NOT NULL COMMENT '身份证号',
  `sex` varchar(10) DEFAULT NULL COMMENT '性别：女 男 保密',
  `birth` date DEFAULT NULL COMMENT '生日',
  `addr` varchar(255) DEFAULT NULL COMMENT '用户住址',
  `integral_num` int(10) NOT NULL DEFAULT '0' COMMENT '积分数量',
  `create_time` date NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of user
-- ----------------------------

-- ----------------------------
-- Table structure for user_buy
-- ----------------------------
DROP TABLE IF EXISTS `user_buy`;
CREATE TABLE `user_buy` (
  `user_buy_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '购买记录id',
  `house_id` int(10) NOT NULL COMMENT '房屋id',
  `house_name` varchar(50) NOT NULL COMMENT '房屋名称',
  `buy_price` decimal(10,2) NOT NULL COMMENT '支付金额',
  `buy_date` date NOT NULL COMMENT '购买时间',
  `owner_id` int(10) NOT NULL COMMENT '房屋所有人id',
  `owner_name` varchar(50) NOT NULL COMMENT '房屋所有人名称',
  `user_id` int(10) NOT NULL COMMENT '购买者id',
  `user_name` varchar(50) NOT NULL COMMENT '购买者名称',
  PRIMARY KEY (`user_buy_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户购买记录表';

-- ----------------------------
-- Records of user_buy
-- ----------------------------

-- ----------------------------
-- Table structure for user_favorite
-- ----------------------------
DROP TABLE IF EXISTS `user_favorite`;
CREATE TABLE `user_favorite` (
  `favorite_id` int(10) NOT NULL COMMENT '关注ID',
  `house_id` int(10) NOT NULL COMMENT '关注房屋ID',
  `house_name` varchar(50) NOT NULL COMMENT '关注房屋名称',
  `user_id` int(10) NOT NULL COMMENT '关注人',
  `user_name` varchar(50) NOT NULL COMMENT '关注人名称',
  `state` varchar(10) NOT NULL DEFAULT '关注' COMMENT '状态：关注，取消',
  `create_time` date NOT NULL COMMENT '关注时间',
  PRIMARY KEY (`favorite_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户关注房屋表(个人收藏夹)';

-- ----------------------------
-- Records of user_favorite
-- ----------------------------

-- ----------------------------
-- Table structure for user_sale
-- ----------------------------
DROP TABLE IF EXISTS `user_sale`;
CREATE TABLE `user_sale` (
  `user_sale_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户销售记录id',
  `house_id` int(10) NOT NULL COMMENT '房屋id',
  `house_name` varchar(50) NOT NULL COMMENT '房屋名称',
  `sale_price` decimal(10,2) NOT NULL COMMENT '销售价格',
  `sale_time` date NOT NULL COMMENT '销售时间',
  `cust_id` int(10) NOT NULL COMMENT '购买人id',
  `cust_name` varchar(50) NOT NULL COMMENT '购买人名称',
  `owner_id` int(10) NOT NULL COMMENT '房屋所有人id',
  `owner_name` varchar(50) NOT NULL COMMENT '房屋所有人名称',
  PRIMARY KEY (`user_sale_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户销售记录表';

-- ----------------------------
-- Records of user_sale
-- ----------------------------
