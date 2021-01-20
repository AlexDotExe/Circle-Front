import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from './comment.payload';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<any> {
    return this.httpClient.get(this.baseUrl +'api/comments/by-post/' + postId);
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post(this.baseUrl +'api/comments/', commentPayload);
  }

  getAllCommentsByUser(name: string): Observable<any> {
    return this.httpClient.get(this.baseUrl +'api/comments/by-user/' + name);
  }
}