import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PostsRoutingModule } from './posts-routing.module';
import { ListPostsComponent } from './list-posts/list-posts.component';


@NgModule({
  declarations: [ ListPostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
