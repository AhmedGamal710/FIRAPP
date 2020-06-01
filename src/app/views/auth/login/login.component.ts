import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/classes/login';
import {AuthService} from '../../../shared/services/auth.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginModel = new Login("", "");
  loginerror=""
  constructor(private _AuthService:AuthService,private router: Router) { }
 
  ngOnInit(): void {
  }
  onSubmit() {
    this._AuthService.login(this.loginModel).subscribe(
      response => {
       console.log(response)
        localStorage.setItem("token", response.token as string);
        localStorage.setItem("role", response.role  as string);

        if (response.role === "user") {
          localStorage.setItem("id", response.id as string);

        } else {
          localStorage.setItem("id", response.id as string);

        }
      },

      error => {
        {
          this.loginerror = "Something went wrong please try again";
        }

      }
    );
  }}
