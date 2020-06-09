import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/shared/classes/admin';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-admins',
  templateUrl: './add-admins.component.html',
  styleUrls: ['./add-admins.component.sass']
})
export class AddAdminsComponent implements OnInit {

  constructor(private _AuthService:AuthService,private router: Router) { }
admin = new Admin("","")
onsuccess=false
onfail=false
  ngOnInit(): void {
  }

  onSubmit(adminForm:NgForm) {
    this._AuthService.addadmin(this.admin).subscribe(
      response => {
     this.onsuccess=true
     adminForm.reset()

      },

      error => {
        {
console.log(error)     
this.onfail=true
adminForm.reset()

}

      }
    );
  }
  hidefail(){
    this.onfail=false
  }
  hidesuccess(){
    this.onsuccess=false
  }

}
