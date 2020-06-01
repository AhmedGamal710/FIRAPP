import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Login} from '../classes/login'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  login(_Login:Login){

    return this._http.post<any>("http://localhost:3000/xlarge/login", _Login);



  }
}
