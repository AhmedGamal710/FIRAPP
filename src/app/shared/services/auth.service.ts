import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from '../classes/login';
import {Signup} from "../classes/signup";
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  login(_Login:Login){

    return this._http.post<any>("http://localhost:3000/xlarge/login", _Login);

  }
  signup(formData){
    return this._http.post<any>("http://localhost:3000/xlarge/user/signup", formData);
  }
  userInfo(id):Observable<any> {
    return this._http.get(`http://localhost:3000/xlarge/user/account/${id}`,{
      headers:{
        'x_auth_token_user': localStorage.getItem("token"),
      }
    } )
  }
  getCountries(){

    return this._http.get('../../views/auth/countries.txt', {responseType: 'text'})

  }

  addadmin(_Admin:Admin){
  
    return this._http.post<any>("http://localhost:3000/xlarge/admin/add/admin",_Admin, {
      headers: new HttpHeaders({
        'x_auth_token_admin': localStorage.getItem("token")
      })
    });

  }

}
