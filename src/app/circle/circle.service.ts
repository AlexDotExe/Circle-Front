import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CircleModel } from './circle-response';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CircleService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllCircles(): Observable<Array<CircleModel>> {
    return this.http.get<Array<CircleModel>>(this.baseUrl +'api/circle/');
  }
  
  createCircle(circleModel: CircleModel): any {
    return this.http.post(this.baseUrl +'api/circle',
      circleModel);
  }
}