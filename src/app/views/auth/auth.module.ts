import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, HeaderComponent, NavbarComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ImageCropperModule

  ]
})
export class AuthModule { }
