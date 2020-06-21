import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/shared/classes/sub-category';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subcat } from 'src/app/shared/classes/subcat';

declare var $:any;
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.sass']
})
export class ApplicationComponent implements OnInit {
  err=false;

  constructor(private _CategoriesService:CategoriesService,private router:Router) { }
  appmodel:SubCategory[]=[]
  appcat=new SubCategory("",[])
  appsubcat = new Subcat("")
  listsubcategories(){

    this._CategoriesService.listApplicationdevelopment().subscribe(
      data=>{
        this.appmodel= data as SubCategory[]
        console.log(this.appmodel)
  
      },
      error=>{
        console.log(error)
        this.err=true
      }
    )
  }
  ngOnInit(): void {
    this.listsubcategories()

  }
  deleteappcategory(item){
    this._CategoriesService.deleteapp(item._id).subscribe(
      data=>{
        console.log(data)
        this.listsubcategories()

      },
      error=>{
        console.log(error)
        this.err=true
      }
    )

  }

  onSubmit(item){
    console.log(item.name)
    this._CategoriesService.updateapp(this.appcat,item._id).subscribe(
      response=>{
        $(".modal-backdrop").remove();
        console.log(response)
        this.listsubcategories()
      },
      error=>{
        console.log(error)
        this.err=true

      }
    )
    
  }


  addappcategory(addForm:NgForm){

    this._CategoriesService.addapp(this.appsubcat).subscribe(
      data=>{
        console.log(data)
        this.listsubcategories()
      },
      error=>{
        console.log(error)
        this.err=true
    
      }
    
    
    )
    addForm.reset()
      }

}
