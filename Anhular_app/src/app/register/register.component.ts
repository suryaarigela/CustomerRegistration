import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerMock } from '../model/customerMock';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private route:Router, private service:CustomerMock) { }
  customer:Customer;
  ngOnInit() {
    this.loginForm=new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      registerDate:new FormControl(''),
      firstLine:new FormControl(''),
      secondLine:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      postalCode:new FormControl('')
    }
     

    )
  }

  save(){
    console.log('*** ' +this.loginForm.get("firstName").value);
    this.customer ={
      id:null,
      firstName:this.loginForm.get("firstName").value,
      lastName:this.loginForm.get("lastName").value,
      registerDate:this.loginForm.get("registerDate").value,
      address:{
        id:null,
        firstLine:this.loginForm.get("firstLine").value,
        secondLine:this.loginForm.get("secondLine").value,
        city:this.loginForm.get("city").value,
        state:this.loginForm.get("state").value,
        postalcode:this.loginForm.get("postalCode").value
      }
    };
    this.service.saveUser(this.customer);
    this.route.navigate(['']);
  }

}
