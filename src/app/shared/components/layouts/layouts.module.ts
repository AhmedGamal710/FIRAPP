import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, AuthComponent, DashboardComponent, NavbarComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
<<<<<<< HEAD
    FormsModule
=======

>>>>>>> fe6d9014d8cd214104cedfebe14864dda2625d06
  ]
})
export class LayoutsModule { }
