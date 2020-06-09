import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNotapprovedComponent } from './not approved/list-notapproved/list-notapproved.component';
import { ListApprovedComponent } from './approved/list-approved/list-approved.component';



const routes: Routes = [

{
  path:'',
  component:ListNotapprovedComponent
},
{
  path:'approved',
  component:ListApprovedComponent
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
