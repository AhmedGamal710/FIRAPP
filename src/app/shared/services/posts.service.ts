import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }
  listnotapproved(){
    return this._http.get(
      "http://localhost:3000/xlarge/admin//list/notapproved")

  }
}
