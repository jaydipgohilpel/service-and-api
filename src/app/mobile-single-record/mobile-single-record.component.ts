import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AllServiceService } from '../service/all-service.service';

@Component({
  selector: 'app-mobile-single-record',
  templateUrl: './mobile-single-record.component.html',
  styleUrls: ['./mobile-single-record.component.scss'],
})
export class MobileSingleRecordComponent implements OnInit,OnDestroy {
  id: any;
  record: any;
  observel: any;
  constructor(private route: ActivatedRoute, private allService: AllServiceService) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (typeof params['id'] !== 'undefined') {
        this.id = params['id'];
        this.allService.getApiData().subscribe((getRecord) => {
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

    //observel
    this.observel = this.allService.customObservable.subscribe(
      serviceData => console.log("mobile-sigle-component-", serviceData),
      err => console.log(err),
      () => console.log("comlete")
    )

  }

  ngOnDestroy(): void {

  }
}
