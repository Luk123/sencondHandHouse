package com.wintop.ms.house;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.wintop.ms.house.mapper.**")
//@EnableCaching
public class HouseMSApplication {

	public static void main(String[] args) {
        SpringApplication.run(HouseMSApplication.class, args);
	}
}
