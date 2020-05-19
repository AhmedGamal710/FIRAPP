import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  SignupUrl = "http://localhost:3000/xlarge/user/signup"
  LoginUrl = "http://localhost:3000/xlarge/login"

  constructor( private http:HttpClient) {  }
  Signup(name, email, password, img, phone, country, Age, about){
    return this.http.post(this.SignupUrl,"")
  }
  Login(email,password) {
    return this.http.post(this.LoginUrl, JSON.stringify(email,password))
  }
}
