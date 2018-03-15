import { Customer } from "./customer";
import {Address} from "./address";
import { Injectable } from "@angular/core";
import {Http,RequestOptions,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
@Injectable()
export class CustomerMock {
    customers : Customer[];

    constructor(private http:Http){

    }

  

    getAll():any{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        console.log('************'+this.customers);
        return this.http.get("http://localhost:8080/api/users",options);
      }
    
      saveUser(customer:Customer){
          console.log('customer',customer);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post("http://localhost:8080/api/user/add",customer,options).subscribe();
      }

      updateUser(customer:Customer){
        console.log('customer',customer);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.http.put("http://localhost:8080/api/user/update",customer,options).subscribe();
    }

    deleteUser(id:any){
     
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.delete("http://localhost:8080/api/user/delete/"+id,options).subscribe();
  }

      getCustomer(id:any):any{
        let cust:any;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        console.log('************'+this.customers);
        return this.http.get("http://localhost:8080/api/getUser/"+id,options);
     
      }
     
}