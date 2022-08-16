import { Component, OnInit } from '@angular/core';
import { ApiDataService } from './api-data.service'
@Component({
  selector: 'app-fetch-api-data',
  templateUrl: './fetch-api-data.component.html',
  styleUrls: ['./fetch-api-data.component.scss']
})
export class FetchApiDataComponent implements OnInit {
  apidata: any;
  constructor(private data: ApiDataService) {
    this.data.getapidata().subscribe(userdata => {
      console.log(userdata);
      this.apidata = userdata;
    })
  }
  ngOnInit(): void {
  }

}
