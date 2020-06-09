import { Component, OnInit } from '@angular/core';
import {Posts } from './../../../classes/posts'
import { PostsService } from './../../../services/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  constructor(private _postser:PostsService) { }
  postinterface: Posts[];
  ngOnInit() {
    this._postser.category().subscribe(data => {
      this.postinterface = data 
      console.log(data)
      console.log(this.postinterface)
    })    
  }

}
