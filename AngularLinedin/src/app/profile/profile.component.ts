import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LinkedinService } from '../linkedin.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 id:string;
  profileForm:FormGroup;
  constructor(private service:LinkedinService,private router:Router) { }

  ngOnInit() {
    this.service.getProfile(localStorage.getItem('email'))
    .map(
      res=> {
        let profile:Profile;
          console.log('*********'+res.json())
          profile=res.json();
          console.log('******IIIIIIDDDDDD***'+profile.id);
          this.id=profile.id;
          this.profileForm=new FormGroup({
            platform:new FormControl(profile.platform,Validators.required),
            role:new FormControl(profile.role,Validators.required),
            company:new FormControl(profile.company,[Validators.required]),
            telephone:new FormControl(profile.telephone,Validators.required)
          })
        
      }
    )
    .subscribe();;

    this.profileForm=new FormGroup({
      platform:new FormControl('',Validators.required),
      role:new FormControl('',Validators.required),
      company:new FormControl('',[Validators.required]),
      telephone:new FormControl('',Validators.required)
    })
  }

  submitForm(){
    this.service.submitProfile(
      {
        id:this.id,
        platform:this.profileForm.get('platform').value,
        role:this.profileForm.get('role').value,
        company:this.profileForm.get('company').value,
        telephone:this.profileForm.get('telephone').value,
        email:localStorage.getItem('email'),
        name:localStorage.getItem('currentUser'),
      }
    ).map(
      res=> {
        //  console.log('*********'+res.json())
          this.router.navigate(['safe/center']);
        
      }
    )
    .subscribe();
  }

}
