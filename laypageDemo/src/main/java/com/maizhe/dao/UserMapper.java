package com.maizhe.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.maizhe.entity.User;

@Repository
public interface UserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
    
    List<User>selectAll();
}