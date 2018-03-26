import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LinkedinService } from '../linkedin.service';
import 'rxjs/add/operator/map';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LinkedinService,private route:Router) { }
  loginForm:FormGroup;
  user:User;
  ngOnInit() {
    this.loginForm=new FormGroup({
      username:new FormControl('',Validators.required),
      
      password:new FormControl('',[Validators.required]),
    
    })
  }

  login(){
    this.service.getUser(this.loginForm.get("username").value,this.loginForm.get("password").value)
    .map(
      res=> {
          console.log('*********'+res.json())
          this.user=res.json();
          if(this.user.password==this.loginForm.get("password").value){
            console.log('Success');
            localStorage.setItem('email',this.user.email);
            console.log('User :::'+this.user.name);
            localStorage.setItem('currentUser',this.user.name);
            this.route.navigate(['safe/center']);
          }
        
      }
    )
    .subscribe();;

  }
}
