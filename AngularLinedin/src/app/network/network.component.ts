import { Component, OnInit } from '@angular/core';
import { LinkedinService } from '../linkedin.service';
import { Profile } from '../models/profile';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(private service:LinkedinService,private router:Router) { }
   profiles:Profile[];
  ngOnInit() {
    this.service.getAllProfile(localStorage.getItem('email'))
    .map(
      res=> {
        
          console.log('*********'+res.json())
          this.profiles=res.json();
      }
    )
    .subscribe();;
  }


  connect(profile:Profile){
    this.service.friendRequest(profile.email,localStorage.getItem('email')).map(
      res=> {
          console.log('life succccckkkkssss');
          console.log('*********'+res.json())
          this.profiles=res.json();
      }
    )
    .subscribe();
  }

}
