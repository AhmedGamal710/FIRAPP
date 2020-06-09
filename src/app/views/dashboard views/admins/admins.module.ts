import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminsRoutingModule } from './admins-routing.module';
import { AddAdminsComponent } from './add-admins/add-admins.component';


@NgModule({
  declarations: [AddAdminsComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    FormsModule
  ]
})
export class AdminsModule { }
