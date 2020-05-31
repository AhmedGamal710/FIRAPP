import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{RouterModule} from '@angular/router'


@NgModule({
  declarations: [HomeComponent, AuthComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
