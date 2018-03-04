package com.maizhe.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.maizhe.dao.UserMapper;
import com.maizhe.entity.User;
import com.maizhe.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserMapper userMapper;

	public PageInfo<User> findUserByPage(int page, int pageSize) {
		PageHelper.startPage(page, pageSize);
		List<User> list = userMapper.selectAll();
		return new PageInfo<User>(list);
	}
	
	
}
