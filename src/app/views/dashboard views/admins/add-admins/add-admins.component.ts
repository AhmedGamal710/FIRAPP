import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/shared/classes/admin';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-admins',
  templateUrl: './add-admins.component.html',
  styleUrls: ['./add-admins.component.sass']
})
export class AddAdminsComponent implements OnInit {

  constructor(private _AuthService:AuthService,private router: Router) { }
admin = new Admin("","")
  ngOnInit(): void {
  }

  onSubmit() {
    this._AuthService.addadmin(this.admin).subscribe(
      response => {
       console.log(response)
     
      },

      error => {
        {
console.log(error)        }

      }
    );
  }

}
