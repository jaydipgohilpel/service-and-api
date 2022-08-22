import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-localservice',
  templateUrl: './localservice.component.html',
  styleUrls: ['./localservice.component.scss'],
})
export class LocalserviceComponent implements OnInit {
  ngOnInit(): void {}
  userData: any;
  titleFromServise: any;
  constructor(private user: UserdataService) {
    this.userData = user.getData();
    this.titleFromServise = user.getTitle();
  }
  display = false;
  onPress() {
    this.display = true;
  }
}
