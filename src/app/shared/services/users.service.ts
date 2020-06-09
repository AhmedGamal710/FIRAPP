import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }




  listusers(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin/user/list", {
        headers: new HttpHeaders({
          'x_auth_token_admin': localStorage.getItem("token"),
        })
      })

  }
  deleteusers(_id){
    return this._http.get(
      "http://localhost:3000/xlarge/admin/delete/user/"+_id, {
        headers: new HttpHeaders({
          'x_auth_token_admin': localStorage.getItem("token"),
        })
      })

  }
}
