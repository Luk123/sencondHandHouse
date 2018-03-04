package com.maizhe.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.maizhe.entity.User;
import com.maizhe.service.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/user/list",method=RequestMethod.GET)
	@ResponseBody
	public Map<String, Object>findAllByPage(int page,int pageSize){
		Map<String, Object> resultMap = new HashMap<String, Object>();
		PageInfo<User> pager = userService.findUserByPage(page,pageSize);
		//总条数
		resultMap.put("total", pager.getTotal());
		//获取每页数据
		resultMap.put("rows", pager.getList());
		return resultMap;
		
	}
	
}
