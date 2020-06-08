import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsSer {

  constructor(private _http: HttpClient) { }
  category():Observable<any> {
    return this._http.get("http://localhost:3000/xlarge/admin/categories/web");
  }
  signup(formData){
    
    return this._http.post<any>("http://localhost:3000/xlarge/user/signup", formData);

  }
  getCountries(){

    return this._http.get('../../views/auth/countries.txt', {responseType: 'text'})

  }

}
