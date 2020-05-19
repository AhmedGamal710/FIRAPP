import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl = ""
  constructor(private http:HttpClient) { }
  getPost(){ }
}
