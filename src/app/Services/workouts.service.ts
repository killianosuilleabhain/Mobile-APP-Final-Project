import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  constructor(private httpClient:HttpClient) { }

  GetWorkoutData():Observable<any>{
    return this.httpClient.get('https://jsonblob.com/api/6e5a477a-b50b-11eb-a12e-1552bc27d782');
  }
}
