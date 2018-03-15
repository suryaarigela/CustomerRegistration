import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerMock } from '../model/customerMock';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CustomerMock,public dialogRef: MatDialogRef<DeleteComponent>,,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  ok(){
    this.service.deleteUser(this.data.id);
    this.dialogRef.close();
  }
  cancel(){
    
    this.dialogRef.close();
  }
}
