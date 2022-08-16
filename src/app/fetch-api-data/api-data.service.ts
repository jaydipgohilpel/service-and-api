import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http:HttpClient) {   }
  getapidata()
    {
      let url='https://jsonplaceholder.typicode.com/users';
      return this.http.get(url);
    }
}
