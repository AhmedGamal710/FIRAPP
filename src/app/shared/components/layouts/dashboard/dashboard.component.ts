import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  togglerr=true
 
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  toggler(){

   
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    })
  }

 
}
