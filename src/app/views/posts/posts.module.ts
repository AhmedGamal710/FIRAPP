import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PostsRoutingModule } from './posts-routing.module';
import { ListNotapprovedComponent } from './not approved/list-notapproved/list-notapproved.component';

@NgModule({
  declarations: [ ListNotapprovedComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { }
