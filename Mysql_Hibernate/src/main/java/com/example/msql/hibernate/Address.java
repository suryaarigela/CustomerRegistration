package com.example.msql.hibernate;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "ADDRESS")

public class Address implements Serializable{
	  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@JsonBackReference
	  @OneToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "user_id", nullable = false)
	private User user;
	private String firstLine;
	private String secondLine;
	private String city;
	private String state;
	private String postalcode;

	@Column(name = "first_line", unique = false, nullable = true)
	public String getFirstLine() {
		return firstLine;
	}

	public void setFirstLine(String firstLine) {
		this.firstLine = firstLine;
	}

	@Column(name = "second_line", unique = false, nullable = true)
	public String getSecondLine() {
		return secondLine;
	}

	public void setSecondLine(String secondLine) {
		this.secondLine = secondLine;
	}

	@Column(name = "city", unique = false, nullable = true)
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Column(name = "state", unique = false, nullable = true)
	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	@Column(name = "postalcode", unique = false, nullable = true)
	public String getPostalcode() {
		return postalcode;
	}

	public void setPostalcode(String postalcode) {
		this.postalcode = postalcode;
	}

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
}