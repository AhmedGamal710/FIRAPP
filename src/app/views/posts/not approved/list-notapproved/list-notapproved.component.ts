import { Component, OnInit} from '@angular/core';
import{Post} from '../../../../shared/classes/post'
import { PostsService } from 'src/app/shared/services/posts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-notapproved',
  templateUrl: './list-notapproved.component.html',
  styleUrls: ['./list-notapproved.component.sass']
})
export class ListNotapprovedComponent implements OnInit {
  constructor(private _PostsService:PostsService,private router:Router) { }
  notapprovedposts: Post[]=[]
  status:boolean=false
  status2:boolean=true


  ngOnInit(): void {
    this._PostsService.listnotapproved().subscribe(
      data => {
console.log(data);
this.notapprovedposts=data as  Post[]
      },
      error => {
console.log(error)
      }
    );
  }



  change(){

    this.status=true;
    this.status2=false
    this.router.navigate(["admin/approved"])
}
change2(){

  this.status=false;
  this.status2=true;
  this.router.navigate(["/admin"])
}
onpost(){
  if(this.router.url=="/admin/approved"){
    this.status=true;
    this.status2=false
        }
 

}
 
}
