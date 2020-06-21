import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubCategory } from 'src/app/shared/classes/sub-category';
import { Subcat } from '../classes/subcat';

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
 
addweb(_Subcat:Subcat){

  return this._http.post("http://localhost:3000/xlarge/admin/add/category/web"
  ,_Subcat,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token")
   })
 })

}










deleteapp(_id){
  return this._http.delete("http://localhost:3000/xlarge/admin/delete/category/Applicationdevelopment/"+_id
 ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token"),
   })})
 
 }


 updateapp(_subcategory:SubCategory,_id){
   return this._http.post("http://localhost:3000/xlarge/admin/update/category/Applicationdevelopment/"+_id
  ,_subcategory ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token")
   })
 })
  
  }

addapp(_Subcat:Subcat){

 return this._http.post("http://localhost:3000/xlarge/admin/add/category/Applicationdevelopment"
 ,_Subcat,{
  headers: new HttpHeaders({
    'x_auth_token_admin': localStorage.getItem("token")
  })
})

}















deleteMiscellaneousfields(_id){
  return this._http.delete("http://localhost:3000/xlarge/admin/delete/category/Miscellaneousfields/"+_id
 ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token"),
   })})
 
 }


 updateMiscellaneousfields(_subcategory:SubCategory,_id){
   return this._http.post("http://localhost:3000/xlarge/admin/update/category/Miscellaneousfields/"+_id
  ,_subcategory ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token")
   })
 })
  
  }

addMiscellaneousfields(_Subcat:Subcat){

 return this._http.post("http://localhost:3000/xlarge/admin/add/category/Miscellaneousfields"
 ,_Subcat,{
  headers: new HttpHeaders({
    'x_auth_token_admin': localStorage.getItem("token")
  })
})

}




deleteCompetitiveprogramming(_id){
  return this._http.delete("http://localhost:3000/xlarge/admin/delete/category/Competitiveprogramming/"+_id
 ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token"),
   })})
 
 }


 updateCompetitiveprogramming(_subcategory:SubCategory,_id){
   return this._http.post("http://localhost:3000/xlarge/admin/update/category/Competitiveprogramming/"+_id
  ,_subcategory ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token")
   })
 })
  
  }

addCompetitiveprogramming(_Subcat:Subcat){

 return this._http.post("http://localhost:3000/xlarge/admin/add/category/Competitiveprogramming"
 ,_Subcat,{
  headers: new HttpHeaders({
    'x_auth_token_admin': localStorage.getItem("token")
  })
})

}











deleteDatascience(_id){
  return this._http.delete("http://localhost:3000/xlarge/admin/delete/category/Datascience/"+_id
 ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token"),
   })})
 
 }


 updateDatascience(_subcategory:SubCategory,_id){
   return this._http.post("http://localhost:3000/xlarge/admin/update/category/Datascience/"+_id
  ,_subcategory ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token")
   })
 })
  
  }

addDatascience(_Subcat:Subcat){

 return this._http.post("http://localhost:3000/xlarge/admin/add/category/Datascience"
 ,_Subcat,{
  headers: new HttpHeaders({
    'x_auth_token_admin': localStorage.getItem("token")
  })
})

}










deleteMachinelearning(_id){
  return this._http.delete("http://localhost:3000/xlarge/admin/delete/category/Machinelearning/"+_id
 ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token"),
   })})
 
 }


 updateMachinelearning(_subcategory:SubCategory,_id){
   return this._http.post("http://localhost:3000/xlarge/admin/update/category/Machinelearning/"+_id
  ,_subcategory ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token")
   })
 })
  
  }

addMachinelearning(_Subcat:Subcat){

 return this._http.post("http://localhost:3000/xlarge/admin/add/category/Machinelearning"
 ,_Subcat,{
  headers: new HttpHeaders({
    'x_auth_token_admin': localStorage.getItem("token")
  })
})

}













deleteOpensource(_id){
  return this._http.delete("http://localhost:3000/xlarge/admin/delete/category/Opensource/"+_id
 ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token"),
   })})
 
 }


 updateOpensource(_subcategory:SubCategory,_id){
   return this._http.post("http://localhost:3000/xlarge/admin/update/category/Opensource/"+_id
  ,_subcategory ,{
   headers: new HttpHeaders({
     'x_auth_token_admin': localStorage.getItem("token")
   })
 })
  
  }

addOpensource(_Subcat:Subcat){

 return this._http.post("http://localhost:3000/xlarge/admin/add/category/Opensource"
 ,_Subcat,{
  headers: new HttpHeaders({
    'x_auth_token_admin': localStorage.getItem("token")
  })
})

}



}
