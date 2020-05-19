import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Signup } from './../../interfaces/signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(private authSer: AuthService ) { }
  signInerface : Signup 
  ngOnInit() {
  }
  sinup(form) {
    let data: Signup = form.value;
    this.authSer.Signup(data.name, data.email, data.password, data.img, data.phone, data.country, data.Age, data.about).subscribe()
  }
}
