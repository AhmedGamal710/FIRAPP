import { Component, OnInit } from '@angular/core';
import {Post, Miscellaneousfields, Applicationdevelopment, Datascience, Competitiveprogramming } from './../../../classes/post'
import { PostsService } from './../../../services/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  isOption:boolean = false
  constructor(private _postser:PostsService) { }
  // get interfaces
  postinterface: Post[];
  miscInterface: Miscellaneousfields [];
  appdev:Applicationdevelopment[];
  datasince:Datascience[];
  programming:Competitiveprogramming
  // for home array
  Web: Array<any>
  Miscellaneousfields: Array<any>
  appDeveloper: Array<any>
  datascine: Array<any>
  program:Array<any>


  ngOnInit() {
    // Web Post
    this._postser.web().subscribe(data => {
      this.postinterface = data
      this.Web = data.map( l  => l.post ).flat()
      console.log( "Web" + this.Web)
    })
    // Miscellaneousfields post 
    this._postser.Miscellaneousfields().subscribe(data => {
      this.miscInterface = data 
      this.Miscellaneousfields = data.map( l => l.post ).flat()
      console.log( "Miscellaneousfields" + this.Miscellaneousfields)
    })
    // Applicationdevelopment post
    this._postser.Applicationdevelopment().subscribe(data => {
      this.appdev = data 
      this.appDeveloper = data.map( l => l.post ).flat()
      console.log( "appDeveloper" + this.appDeveloper)
    })
    // Datascience post
    this._postser.Datascience().subscribe(data => {
      this.datasince = data 
      this.datascine = data.map( l => l.post ).flat()
      console.log("datascine" + this.datascine)
    })
    // Competitiveprogramming
    this._postser.Competitiveprogramming().subscribe(data => {
      this.programming = data 
      this.program = data.map( l => l.post ).flat()
      console.log( "progrramming" +  this.program)
    })
  }
  scrollDown(){
    let ele = document.getElementById("scrolling")
    ele.scrollBy({top:300, left: 0 ,behavior:"smooth"})
    }
  scrollTop(){
    let ele = document.getElementById("scrolling")
    ele.scrollBy({top:-300, left: 0 ,behavior:"smooth"})
    }
  scrollRight(){
    let ele = document.getElementById("myTabContent")
    ele.scrollBy({top:0, left: 528 ,behavior:"smooth"})
  }
  scrollleft(){
    let ele = document.getElementById("myTabContent")
    ele.scrollBy({top:0, left: -528 ,behavior:"smooth"})
  }

  selectpox(){
    var ele = document.getElementById("category")
    if( ele.value == "web" ) {
      document.getElementById("new-select").style.display = "inline"
      document.getElementById("option").innerHTML = "front end"
    }
    if( ele.value == "tecnology" ) {
      document.getElementById("new-select").style.display = "inline"
      document.getElementById("option").innerHTML = "laptops"
    }
    if( ele.value == "programing" ) {
      document.getElementById("new-select").style.display = "inline"
      document.getElementById("option").innerHTML = "c++"
    }
  }
  option(){
    this.isOption = !this.isOption
  }
}
