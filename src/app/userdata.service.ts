import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  getData() {

    return [
      {
        name: "Jaydip Gohil",
        age: 24,
        id: 1,
        city: "Bhavnagar"
      },
      {
        name: "Balvant Gohil",
        age: 30,
        id: 2,
        city: "surat"
      },
      {
        name: "Jagdish Gohil",
        age: 24,
        id: 3,
        city: "Bhavnagar"
      },
      {
        name: "Jaydip Gohil",
        age: 24,
        id: 1,
        city: "surat"
      }
      ,
      {
        name: "Balvant Gohil",
        age: 30,
        id: 2,
        city: "Bhavnagar"
      },
      {
        name: "Jagdish Gohil",
        age: 24,
        id: 3,
        city: "Bhavnagar"
      }
    ]
  }
  getTitle()
  {
    let admin='Web service';
    return admin;
  }
}
