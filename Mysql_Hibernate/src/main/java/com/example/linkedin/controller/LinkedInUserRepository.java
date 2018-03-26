package com.example.linkedin.controller;

import org.springframework.data.jpa.repository.JpaRepository;
import java.lang.String;
import com.example.linkedin.controller.LinkedInUser;
import java.util.List;

public interface LinkedInUserRepository extends JpaRepository<LinkedInUser, Long> {

	List<LinkedInUser> findByName(String name);

	List<LinkedInUser> findByEmail(String email);
	List<LinkedInUser> findByConfirmpassword(String confirmpassword);
}
