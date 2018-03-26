import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-center-pane',
  templateUrl: './safe-center-pane.component.html',
  styleUrls: ['./safe-center-pane.component.css']
})
export class SafeCenterPaneComponent implements OnInit {

  Users:string[]=["surya","anjan","mani"];
  title:string="Surya";
  constructor() { }

  ngOnInit() {
    this.title="arya";
  
  }

}
