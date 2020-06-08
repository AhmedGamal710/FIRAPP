import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

=======
import { HttpClient, HttpHeaders} from "@angular/common/http";
>>>>>>> fe6d9014d8cd214104cedfebe14864dda2625d06

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
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

=======
export class PostsService {

  constructor(private _http: HttpClient) { }
  listnotapproved(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin//list/notapproved")

  }
>>>>>>> fe6d9014d8cd214104cedfebe14864dda2625d06
}
