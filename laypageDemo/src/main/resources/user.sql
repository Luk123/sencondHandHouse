/*
Navicat MySQL Data Transfer

Source Server         : localhost3308
Source Server Version : 50717
Source Host           : localhost:3308
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-08-30 15:35:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zhangsan1', '123456', '111111111', '湖北1', '80');
INSERT INTO `user` VALUES ('2', 'zhangsan2', '123456', '111111112', '湖北2', '20');
INSERT INTO `user` VALUES ('3', 'zhangsan4', '123456', '111111113', '湖北3', '30');
INSERT INTO `user` VALUES ('4', 'zhangsan5', '123456', '111111114', '湖北4', '40');
INSERT INTO `user` VALUES ('5', 'zhangsan6', '123456', '111111115', '湖北5', '50');
INSERT INTO `user` VALUES ('6', 'zhangsan7', '123456', '111111116', '湖北6', '60');
INSERT INTO `user` VALUES ('7', 'zhangsan8', '123456', '111111117', '湖北7', '70');
INSERT INTO `user` VALUES ('8', 'zhangsan9', '123456', '111111118', '湖北8', '80');
INSERT INTO `user` VALUES ('9', 'zhangsan10', '123456', '111111119', '湖北9', '90');
INSERT INTO `user` VALUES ('10', 'zhangsan11', '123456', '111111120', '湖北10', '100');
INSERT INTO `user` VALUES ('11', 'zhangsan12', '123456', '111111135', '湖北11', '95');
INSERT INTO `user` VALUES ('12', 'zhangsan13', '123456', '111111124', '湖北12', '85');
INSERT INTO `user` VALUES ('13', 'zhangsan14', '123456', '111111123', '湖北13', '65');
INSERT INTO `user` VALUES ('14', 'zhangsan15', '123456', '111111122', '湖北14', '35');
INSERT INTO `user` VALUES ('15', 'zhangsan16', '123456', '111111188', '湖北15', '25');
