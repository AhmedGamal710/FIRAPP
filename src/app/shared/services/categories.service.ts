import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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










}
