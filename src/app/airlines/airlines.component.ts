import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AllServiceService } from '../service/all-service.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { MaterialExampleModule } from './../../material.module';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss'],
})
export class AirlinesComponent implements OnInit, AfterViewInit {
  mobiledata: any;
  dataSource: any;
  displayedColumns: string[] = [
    'id',
    'title',
    'brand',
    'price',
    'category',
    'stock',
    'rating',
    'discountPercentage',
    'description',
  ];
  @ViewChild(MatPaginator)
  paginator: MatPaginator | undefined;
  constructor(private http: AllServiceService) {}

  ngOnInit() {
    this.http.getApiData().subscribe((data) => {
      this.mobiledata = data;
      // this.dataSource.sort = this.sort;
      console.log(this.mobiledata.products);
      this.dataSource = new MatTableDataSource(this.mobiledata.products);
      // this.dataSource = this.mobiledata.products;

      this.dataSource.paginator = this.paginator;
    });
  }
  ngAfterViewInit() {}
}
