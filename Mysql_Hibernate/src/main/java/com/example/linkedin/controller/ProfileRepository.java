package com.example.linkedin.controller;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {

	Profile findByEmail(String email);


}
