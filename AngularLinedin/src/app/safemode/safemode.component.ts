import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-safemode',
  templateUrl: './safemode.component.html',
  styleUrls: ['./safemode.component.css']
})
export class SafemodeComponent implements OnInit {

  user:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user=localStorage.getItem('currentUser');
    console.log("############ "+this.user)
  //  this.route.params
   // .switchMap((params: Params) => this.user=params['name'])
    //.subscribe();
  }

}
