import { Component, OnInit } from '@angular/core';
import {Post } from './../../../classes/post'
import { PostsService } from './../../../services/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  isOption:boolean = false
  constructor(private _postser:PostsService) { }
  postinterface: Post[];
  
  ngOnInit() {
    this._postser.category().subscribe(data => {
      this.postinterface = data 
      console.log(data)
      console.log(data[0].post[0])
    })    
  }
scrollDown(){
  window.scrollBy({top:300, left:0, behavior:'smooth'})
  }
scrollTop(){
    window.scrollBy({top:-300, left:0, behavior:'smooth'})
  }
  option(){
    this.isOption = !this.isOption
  }
}
