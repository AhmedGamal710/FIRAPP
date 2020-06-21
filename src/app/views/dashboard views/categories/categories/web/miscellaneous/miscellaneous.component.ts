import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/shared/classes/sub-category';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subcat } from 'src/app/shared/classes/subcat';
declare var $:any;

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.sass']
})
export class MiscellaneousComponent implements OnInit {
  err=false;

  constructor(private _CategoriesService:CategoriesService,private router:Router) { }
  Miscellaneousfieldsmodel:SubCategory[]=[]
  Miscellaneousfieldscat=new SubCategory("",[])
  Miscellaneousfieldssubcat = new Subcat("")

  listsubcategories(){

    this._CategoriesService.listMiscellaneousfields().subscribe(
      data=>{
        this.Miscellaneousfieldsmodel= data as SubCategory[]
        console.log(this.Miscellaneousfieldsmodel)
  
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


  deleteMiscellaneouscategory(item){
    this._CategoriesService.deleteMiscellaneousfields(item._id).subscribe(
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
    this._CategoriesService.updateMiscellaneousfields(this.Miscellaneousfieldscat,item._id).subscribe(
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


  addMiscellaneouscategory(addForm:NgForm){

    this._CategoriesService.addMiscellaneousfields(this.Miscellaneousfieldssubcat).subscribe(
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
