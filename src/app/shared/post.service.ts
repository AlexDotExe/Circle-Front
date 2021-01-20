  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post-model';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { share } from 'rxjs/operators';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = environment.baseUrl;
private cache: Observable<any>;
  constructor(private http: HttpClient) {
   }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>(this.baseUrl +'api/posts/');
  }

 createPost(postPayload: CreatePostPayload): Observable<any> {
   if(this.cache){ return this.cache;}
    else this.cache = this.http.post(this.baseUrl +'api/posts/', postPayload).pipe(share());
    return this.cache;
  } 

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(this.baseUrl +'api/posts/' + id);
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.baseUrl +'api/posts/by-user/' + name);
  }
  getAllPostsByCircle(id: number): Observable<Array<PostModel>>{
    return this.http.get<Array<PostModel>>(this.baseUrl +'api/posts/by-circle/' + id)
    
  }
}