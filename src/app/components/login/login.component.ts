import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from './../../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private authSer:AuthService) { }

  ngOnInit() {
  }
  login(form){
    let data : Login = form.value
    this.authSer.Login(data.name,data.password).subscribe()
  }
}
