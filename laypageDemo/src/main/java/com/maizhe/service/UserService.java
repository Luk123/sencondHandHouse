package com.maizhe.service;

import com.github.pagehelper.PageInfo;
import com.maizhe.entity.User;

public interface UserService {

	PageInfo<User> findUserByPage(int page, int pageSize);
	
}
