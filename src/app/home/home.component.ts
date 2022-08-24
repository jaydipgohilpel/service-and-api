import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  paramsFound = false;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (typeof params['id'] !== 'undefined') {
        this.paramsFound = true;
      } else {
        this.paramsFound = false;
      }
    });
  }

  ngOnInit(): void {}
}
