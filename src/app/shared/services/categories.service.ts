import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubCategory } from 'src/app/shared/classes/sub-category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) { }
  listweb(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin/categories/web")

  }
  listApplicationdevelopment(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin/categories/Applicationdevelopment")

  } 
   listMiscellaneousfields(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin/categories/Miscellaneousfields")

  }
  listCompetitiveprogramming(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin/categories/Competitiveprogramming")

  }
   listDatascience(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin/categories/Datascience")

  }
  listMachinelearning(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin/categories/Machinelearning")

  }
  listOpensource(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin/categories/Opensource")

  }
  
  deleteweb(_id){
   return this._http.delete("http://localhost:3000/xlarge/admin/delete/category/web/"+_id
  ,{
    headers: new HttpHeaders({
      'x_auth_token_admin': localStorage.getItem("token"),
    })})
  
  }


  updateweb(_subcategory:SubCategory,_id){
    return this._http.post("http://localhost:3000/xlarge/admin/update/category/web/"+_id
   ,_subcategory ,{
    headers: new HttpHeaders({
      'x_auth_token_admin': localStorage.getItem("token")
    })
  })
   
   }
 







}
