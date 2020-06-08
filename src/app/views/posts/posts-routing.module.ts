import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNotapprovedComponent } from './not approved/list-notapproved/list-notapproved.component';
;


const routes: Routes = [

{
  path:'',
  component:ListNotapprovedComponent
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
