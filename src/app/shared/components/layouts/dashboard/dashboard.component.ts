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
  status:boolean=true
  status2:boolean=false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toggler(){

   
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    })
  }
  change(){

      this.status=false;
      this.status2=true
      this.router.navigate(["admin/posts"])
  }
  change2(){

    this.status=true;
    this.status2=false
  }
}
