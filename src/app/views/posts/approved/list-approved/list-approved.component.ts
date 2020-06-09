import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import{Post} from '../../../../shared/classes/post'

@Component({
  selector: 'app-list-approved',
  templateUrl: './list-approved.component.html',
  styleUrls: ['./list-approved.component.sass']
})
export class ListApprovedComponent implements OnInit {
  approvedposts: Post[]=[]

  constructor(private _PostsService:PostsService) { }

  ngOnInit(): void {

    this._PostsService.listapproved().subscribe(
      data => {
console.log(data);
this.approvedposts=data as  Post[]
      },
      error => {
console.log(error)
      }
    );
  }

}
