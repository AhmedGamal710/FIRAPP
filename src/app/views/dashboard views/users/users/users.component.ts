import { Component, OnInit, ViewChild } from '@angular/core';
import{User}from 'src/app/shared/classes/user'
import { UsersService } from 'src/app/shared/services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  constructor(private _UsersService:UsersService) { }
users:User[]=[]
  ngOnInit(): void {
    this._UsersService.listusers().subscribe(
      data=>{
this.users=data as User[]
      },
      error=>{
        console.log(error)
      }
    )
  }

}
