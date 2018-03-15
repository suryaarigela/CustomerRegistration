package com.example.msql.hibernate;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CustomerController {

	

	 @Autowired
	    CustomerRepository customerRepository;
	 
	 @Autowired
	     UserRepository userRepository;
	

	 @CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
	 @PostMapping("/customer/add")
	 public Customer createNote(@Valid @RequestBody Customer customer) {
	
	     return customerRepository.save(customer);
	 }
	 @CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
	 @GetMapping("/customers")
	 public List<Customer> getAllCustomers() {
		 
	     try {
			return customerRepository.findAll();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	     return null;
	 }
	 
	 @CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
	 @PostMapping("/user/add")
	 public User createNote(@Valid @RequestBody User user) {
	    System.out.println("User we got "+ user.getFirstName());
		 user.getAddress().setUser(user);
	     return userRepository.save(user);
	 }
	 
	 @CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
	 @PutMapping("/user/update")
	 public User updateNote(@Valid @RequestBody User user) {
	    System.out.println("User we got "+ user.getFirstName());
		 user.getAddress().setUser(user);
	     return userRepository.save(user);
	 }
	 
	 
	 @CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
	 @DeleteMapping("/user/delete/{id}")
	 public void deleteNote(@PathVariable("id") long id) {
		User user= userRepository.findById(id).get();
		// user.getAddress().setUser(user);
		 userRepository.delete(user);
	   
	 }
	 
	 @CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
	 @GetMapping("/users")
	 public List<User> getAllUsers() {
		 
	     try {
			return userRepository.findAll();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	     return null;
	 }
	 
	 @CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
	 @GetMapping("/getUser/{id}")
	 public User getAllUsers(@PathVariable("id") long id) {
		 
	     try {
			return userRepository.findById(id).get();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	     return null;
	 }
	 
	 
	 
}
