import { Component, OnInit } from '@angular/core';
import { ApiDataService } from './api-data.service';
@Component({
  selector: 'app-fetch-api-data',
  templateUrl: './fetch-api-data.component.html',
  styleUrls: ['./fetch-api-data.component.scss'],
})
export class FetchApiDataComponent implements OnInit {
  allData: any;
  constructor(private data: ApiDataService) {
    this.data.getApiData().subscribe((userData) => {
      console.log(userData);
      this.allData = userData;
    });
  }
  ngOnInit(): void {}
}
