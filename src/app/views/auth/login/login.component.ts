import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/classes/login';
import {AuthService} from '../../../shared/services/auth.service'
import { Router } from "@angular/router";
import { UserInfo } from 'src/app/shared/classes/Userinfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginModel = new Login("", "");
  loginerror=""
  userId 
  userdeatil: UserInfo
  constructor(private _AuthService:AuthService,private router: Router) { }
 
  
  onSubmit() {
    this._AuthService.login(this.loginModel).subscribe(
      response => {
      //  console.log(response)
        localStorage.setItem("token", response.token as string);
        localStorage.setItem("role", response.role  as string);

        if (response.role === "user") {
          localStorage.setItem("id", response.id as string);
          this.router.navigate(['/home'])
        } else {
          localStorage.setItem("id", response.id as string);
        }
        // get user info
        this.userId = response.id
        this._AuthService.userInfo(this.userId).subscribe(
          res => { 
            this.userdeatil = res
            localStorage.setItem("User", JSON.stringify(res))
            console.log("hello from User local")
            
          }
          
        )
      },
      error => {
        {
          this.loginerror = "Something went wrong please try again";
        }

      }
    );
    
  }
  ngOnInit() {
    
  }

}
