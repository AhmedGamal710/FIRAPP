import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminsComponent } from './add-admins/add-admins.component';


const routes: Routes = [
  {
    path:'',
    component:AddAdminsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
