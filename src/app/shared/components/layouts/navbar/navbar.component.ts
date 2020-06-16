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

  constructor(private _AuthService:AuthService) { }

  ngOnInit() {
    this._AuthService.userInfo(this.userInfo._id).subscribe()
    setTimeout(() => {
      console.log(" from naaaaav ")
      console.log(this.userInfo._id)
     }, 3000);
   
  }
  

}
