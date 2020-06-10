import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Post} from '../classes/post'

@Injectable({
  providedIn: 'root'
})


export class PostsService {

  constructor(private _http: HttpClient) { }

category():Observable<any> {
  return this._http.get("http://localhost:3000/xlarge/admin/categories/web");
}
  listnotapproved(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin/list/notapproved", {
        headers: new HttpHeaders({
          'x_auth_token_admin': localStorage.getItem("token"),
        })
      })

  }
  listapproved(){
    return this._http.get(
      "http://localhost:3000/xlarge/post/list")

  }
  deletepost(_id){
    return this._http.delete(
      "http://localhost:3000/xlarge/admin/delete/post/"+_id)

  }
  showpost(_id){
    return this._http.get(
      "http://localhost:3000/xlarge/post/list/"+_id)

  }
  approvepost(_id, post:Post){
    return this._http.post(
      "http://localhost:3000/xlarge/admin/approve/post/"+_id,post)

  }
}
