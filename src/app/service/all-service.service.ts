import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(private http: HttpClient) { }
  getApiData() {
    let url = "https://dummyjson.com/products"
    return this.http.get(url);
  }
}
