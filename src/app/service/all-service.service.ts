import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  customObservable = new Observable < string > ((observer: Observer<string>) => {
    let count = 1;
    setInterval(() => {
      observer.next(count.toString())
      count++
      if(count==4)
        observer.error("error occurs")

      if (count > 5)
        observer.complete()

    }, 1000)


  });

  constructor(private http: HttpClient) {

  }
  getApiData() {


    let url = "https://dummyjson.com/products"
    return this.http.get(url);
  }


}
