import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { LinkedinService } from '../linkedin.service';
import { User } from '../models/user';

import { Validators } from '@angular/forms';
import { PasswordValidator } from '../models/passwordvalidator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: LinkedinService) { }

  signupForm:FormGroup;
  ngOnInit() {
    this.signupForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.email),
      password:new FormControl('',[Validators.required,PasswordValidator.validateMe]),
      confirmpassword:new FormControl('',Validators.required)
    })
  }

  submitForm(){
    
     let user:User={
       name:this.signupForm.get("name").value,
       email:this.signupForm.get("email").value,
       password:this.signupForm.get("password").value,
       confirmpassword:this.signupForm.get("confirmpassword").value
     }
     this.service.signUpUser(user).subscribe();
  }


  get password(){
  
    return  this.signupForm.get("password");
  }
}
