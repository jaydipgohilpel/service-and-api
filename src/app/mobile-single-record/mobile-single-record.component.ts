import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AllServiceService } from '../service/all-service.service';

@Component({
  selector: 'app-mobile-single-record',
  templateUrl: './mobile-single-record.component.html',
  styleUrls: ['./mobile-single-record.component.scss'],
})
export class MobileSingleRecordComponent implements OnInit {
  id: any;
  record: any ;
  constructor(private route: ActivatedRoute, private http: AllServiceService) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (typeof params['id'] !== 'undefined') {
        this.id = params['id'];
        this.http.getApiData().subscribe((getRecord) => {
          this.record = getRecord;
          this.record = this.record.products.filter((e: any) => {
            if (e.id == this.id) {
              return this.record.products;
            } else {
              return 0;
            }
          });
        });
      } else {
        this.id = undefined;
      }
    });
  }
}
