import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { CustomerMock } from '../model/customerMock';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EditComponent } from '../edit/edit.component';
import { FormGroup } from '@angular/forms/src/model';
import { DeleteComponent } from '../delete/delete.component';
import { OnChanges } from '@angular/core';
import { DoCheck } from '@angular/core';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
 

  constructor(private service:CustomerMock, private router:Router,public dialog: MatDialog) { }
  customers:Customer[];
  ngOnInit() {
   this.customers= this.service.getAll().map(
    res=> {
     
      this.customers= res.json();
      console.log('****INSIDE********'+this.customers);
    }
  ).subscribe();
   console.log('***********'+this.customers)
  }

  edit(id){
    console.log('delete '+id)
    this.router.navigate(['edit',id]);
  }
  createForm :FormGroup;

  openDialog(id){
    let dialogRef = this.dialog.open(EditComponent,{
      height: '900px',
      width: '1000px',
      data: { id : id}
    });
    dialogRef.afterClosed().subscribe(result => {
    //  this.selectedOption = result;
     
      this.createForm=result;
     
      this.customers= this.service.getAll().map(
        res=> {
         
          this.customers= res.json();
          
        }
      ).subscribe();
      /**let user:User={
        firstname:this.createForm.get('firstname').value,
        lastname:this.createForm.get('lastname').value,
        email:this.createForm.get('email').value,
        password:this.createForm.get('password').value,
        birthdate:this.createForm.get('birthdate').value
      };
      this.service.saveUser(user).subscribe();**/
    });
  }

  delete(id){
    let dialogRef = this.dialog.open(DeleteComponent,{
      height: '200px',
      width: '350px',
      data: { id : id}
    });
    dialogRef.afterClosed().subscribe(result => {
    //  this.selectedOption = result;
     
      this.createForm=result;
     
      this.customers= this.service.getAll().map(
        res=> {
         
          this.customers= res.json();
          console.log('****INSIDE********'+this.customers);
        }
      ).subscribe();
      /**let user:User={
        firstname:this.createForm.get('firstname').value,
        lastname:this.createForm.get('lastname').value,
        email:this.createForm.get('email').value,
        password:this.createForm.get('password').value,
        birthdate:this.createForm.get('birthdate').value
      };
      this.service.saveUser(user).subscribe();**/
    });
  }

}
