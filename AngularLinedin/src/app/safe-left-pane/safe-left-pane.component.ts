import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-safe-left-pane',
  templateUrl: './safe-left-pane.component.html',
  styleUrls: ['./safe-left-pane.component.css']
})
export class SafeLeftPaneComponent implements OnInit {

  @Input() name:string;
  constructor() { }

  ngOnInit() {
    
    console.log('*************** '+this.name);
  }

}
