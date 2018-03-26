import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Observable } from 'rxjs/Observable';
import {Http,RequestOptions,Headers} from '@angular/http';
import { Profile } from './models/profile';
@Injectable()
export class LinkedinService {

  constructor(private http:Http) { }

  signUpUser(user:User):any{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
     return this.http.post("http://localhost:8080/linkedIn/postuser/",user,options);
  }

  getUser(user,password):any{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return  this.http.get('http://localhost:8080/linkedIn/getuser/'+user+"/"+password,options);
  
  }

  submitProfile(profile:Profile):any{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
     return this.http.post("http://localhost:8080/linkedIn/postProfile/",profile,options);
  }

  getProfile(email):any{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return  this.http.get('http://localhost:8080/linkedIn/getProfile/'+email);
  
  }

  getAllProfile(email):any{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return  this.http.get('http://localhost:8080/linkedIn/getAllProfiles/'+email);
  
  }

  friendRequest(to:string,from:string):any{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return  this.http.get('http://localhost:8080/linkedIn/request/'+to+"/"+from);
  }
}
