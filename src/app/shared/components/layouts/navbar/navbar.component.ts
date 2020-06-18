import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/shared/classes/Userinfo';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  accountImg ="../../../../../assets/image/nav/account.png"
  todayDate = new Date();
  userInfo: UserInfo
  isOption: boolean = false
  isLogin: boolean = false
  constructor(private _AuthService:AuthService) {
    
    if (JSON.parse(localStorage.getItem("User")) != 0) {
      this.isLogin = ! this.isLogin
    }
  

   }

  ngOnInit() {   
    this.userInfo = JSON.parse(localStorage.getItem("User"))
  }
  
  option(){
    this.isOption = !this.isOption
  }
  Logout(){
    localStorage.removeItem("User")
  }
}
