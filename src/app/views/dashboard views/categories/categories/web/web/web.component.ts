import { Component, OnInit, ViewChild  } from '@angular/core';
import { SubCategory } from 'src/app/shared/classes/sub-category';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subcat } from 'src/app/shared/classes/subcat';

declare var $:any;

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.sass']
})
export class WebComponent implements OnInit {
errormsg=""
err=false;
  constructor(private _CategoriesService:CategoriesService,private router:Router) { }
webmodel:SubCategory[]=[]
webcat=new SubCategory("",[])
websubcat = new Subcat("")
listsubcategories(){

  this._CategoriesService.listweb().subscribe(
    data=>{
      this.webmodel= data as SubCategory[]
      console.log(this.webmodel)

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
  deletewebcategory(item){
    this._CategoriesService.deleteweb(item._id).subscribe(
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
    this._CategoriesService.updateweb(this.webcat,item._id).subscribe(
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

  addwebcategory(addForm:NgForm){

this._CategoriesService.addweb(this.websubcat).subscribe(
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
