package com.example.msql.hibernate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
@EnableJpaAuditing
@SpringBootApplication
public class MysqlHibernateApplication {

	public static void main(String[] args) {
		SpringApplication.run(MysqlHibernateApplication.class, args);
	}
}
