import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  togglerr=true
  constructor() { }

  ngOnInit(): void {
  }
  toggler(){

   
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    })
  }
}
