import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/shared/classes/sub-category';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subcat } from 'src/app/shared/classes/subcat';
declare var $:any;

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.sass']
})
export class DataScienceComponent implements OnInit {

  constructor(private _CategoriesService:CategoriesService,private router:Router) { }
  err=false;

  Datasciencemodel:SubCategory[]=[]
  Datasciencecat=new SubCategory("",[])
  Datasciencesubcat = new Subcat("")
  listsubcategories(){

    this._CategoriesService.listDatascience().subscribe(
      data=>{
        this.Datasciencemodel= data as SubCategory[]
        console.log(this.Datasciencemodel)
  
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


  deleteDatascience(item){
    this._CategoriesService.deleteDatascience(item._id).subscribe(
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
    this._CategoriesService.updateDatascience(this.Datasciencecat,item._id).subscribe(
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


  addDatascience(addForm:NgForm){

    this._CategoriesService.addDatascience(this.Datasciencesubcat).subscribe(
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
