import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/shared/classes/sub-category';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subcat } from 'src/app/shared/classes/subcat';
declare var $:any;

@Component({
  selector: 'app-competitive',
  templateUrl: './competitive.component.html',
  styleUrls: ['./competitive.component.sass']
})
export class CompetitiveComponent implements OnInit {

  constructor(private _CategoriesService:CategoriesService,private router:Router) { }
  err=false;

  Competitiveprogrammingmodel:SubCategory[]=[]
  Competitiveprogrammingcat=new SubCategory("",[])
  Competitiveprogrammingsubcat = new Subcat("")


  listsubcategories(){

    this._CategoriesService.listCompetitiveprogramming().subscribe(
      data=>{
        this.Competitiveprogrammingmodel= data as SubCategory[]
        console.log(this.Competitiveprogrammingmodel)
  
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



  deleteCompetitiveprogramming(item){
    this._CategoriesService.deleteCompetitiveprogramming(item._id).subscribe(
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
    this._CategoriesService.updateCompetitiveprogramming(this.Competitiveprogrammingcat,item._id).subscribe(
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


  addCompetitiveprogramming(addForm:NgForm){

    this._CategoriesService.addCompetitiveprogramming(this.Competitiveprogrammingsubcat).subscribe(
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
