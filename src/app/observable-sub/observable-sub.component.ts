import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable } from 'rxjs'
import { AllServiceService } from '../service/all-service.service';

@Component({
  selector: 'app-observable-sub',
  templateUrl: './observable-sub.component.html',
  styleUrls: ['./observable-sub.component.scss']
})
export class ObservableSubComponent implements OnInit,OnDestroy {

  constructor(private allServise: AllServiceService) { }
  observel: any;
  ngOnInit(): void {
    this.observel = this.allServise.customObservable.subscribe(
      serviceData =>console.log("observable-sub.component-"+serviceData),
      err => console.log("Error", err),
      () => console.log("complete")

    )
  }
  ngOnDestroy(): void {
    this.observel.unsubscribe();
    console.log("observel unsubscribe");
  }


}
