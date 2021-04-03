import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { userData } from '../userData';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data:any = localStorage.getItem('userData');
  empty:any = null;
  currentUser:any = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient){
    if(localStorage.getItem('userData') != null)
    {
      this.currentUser.next(JSON.parse(this.data));
    }
  }
  baseURL = 'https://routeegypt.herokuapp.com/';
  register(data:any):Observable<any>
  {
    return this._HttpClient.post(this.baseURL + 'signup' , data);
  }
  login(data:any):Observable<any>
  {
    return this._HttpClient.post(this.baseURL + 'signin' , data);
  }
  saveCurrentUser(first_name:any , last_name:any , email:any , token:any)
  {
    let user = new userData(first_name , last_name , email , token);
    localStorage.setItem('userData' , JSON.stringify(user));
    this.currentUser.next(user);
  }
  logout()
  {
    this.currentUser.next(null);
    localStorage.setItem('userData' , this.empty);
    
  }
}