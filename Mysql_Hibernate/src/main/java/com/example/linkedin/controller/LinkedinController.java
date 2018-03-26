package com.example.linkedin.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/linkedIn")
public class LinkedinController {

	@Autowired
	LinkedInUserRepository linkedInUserRepository;
	
	@Autowired
	ProfileRepository profileRepository;
	
	@PostMapping("/postuser")
	 @CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<HttpStatus> postUser(@RequestBody LinkedInUser user){
		this.linkedInUserRepository.save(user);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@PostMapping("/postProfile")
	 @CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<HttpStatus> postUser(@RequestBody Profile profile){
		this.profileRepository.save(profile);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@GetMapping("/getuser/{name}/{password}")
	 @CrossOrigin(origins = "http://localhost:4200")
	public LinkedInUser getUser(@PathVariable("name") String name,@PathVariable("password") String password) {
		System.out.println("user is *******"+password);
		LinkedInUser linkedIn=null;
		List<LinkedInUser> list=this.linkedInUserRepository.findAll();
		for (LinkedInUser linkedInUser : list) {
			if(linkedInUser.getName().equalsIgnoreCase(name) || linkedInUser.getEmail().equalsIgnoreCase(name)){
				linkedIn=linkedInUser;
			}
		}
		
		if(linkedIn.getPassword().equalsIgnoreCase(password)) {
			System.out.println("Return ilinked "+linkedIn);
			return linkedIn;
		}else {
			System.out.println("Return in g null");
			return null;
		}
		
	}
	
	
	@GetMapping("/getProfile/{email}")
	 @CrossOrigin(origins = "http://localhost:4200")
	public Profile getUser(@PathVariable("email") String email) {
		System.out.println("Profile Requested for email "+email);
		return this.profileRepository.findByEmail(email);
	}
	
	@GetMapping("/getAllProfiles/{email}")
	 @CrossOrigin(origins = "http://localhost:4200")
	public List<Profile> getAllProfiles(@PathVariable("email") String email) {
		List<Profile> finalList=new ArrayList<>();
		System.out.println("Profile Requested for email "+email);
		List<Profile> list= this.profileRepository.findAll();
		for (Profile profile : list) {
			if(!profile.getEmail().equalsIgnoreCase(email)) {
				finalList.add(profile);
			}
		}
		return finalList;
	}
	
	@GetMapping("/request/{to}/{from}")
	 @CrossOrigin(origins = "http://localhost:4200")
	public Profile getAllProfiles(@PathVariable("to") String toemail,@PathVariable("from") String fromemail) {
		 
		Profile toProfile=this.profileRepository.findByEmail(toemail);
		String request=toProfile.getRequests();
		if(request==null) {
			request="";
		}
		StringBuffer sb=new StringBuffer(request);
		sb.append("|").append(fromemail);
		toProfile.setRequests(sb.toString());
		return this.profileRepository.save(toProfile);
	//	return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
