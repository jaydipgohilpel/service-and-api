import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { AllServiceService } from '../service/all-service.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
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
export class AirlinesComponent implements OnInit {
  mobiledata: any;
  dataSource: any;
  pageSize = 5;

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
    'images',
  ];
  @ViewChild(MatPaginator)
  paginator: MatPaginator | undefined;

  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private changeRef: ChangeDetectorRef,
    private http: AllServiceService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit() {
    this.http.getApiData().subscribe((data) => {
      this.mobiledata = data;

      console.log(this.mobiledata.products);
      this.dataSource = new MatTableDataSource(this.mobiledata.products);
      // this.dataSource = this.mobiledata.products;

      this.dataSource.sort = this.sort;
      //default title assecnding order
      const sortState: Sort = { active: 'title', direction: 'asc' };
      this.dataSource.sort.active = sortState.active;
      this.dataSource.sort.direction = sortState.direction;
      this.dataSource.sort.sortChange.emit(sortState);
      // console.log(data);

      // this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: any) =>
      //   this.lowercase(typeof data[sortHeaderId]);

      this.dataSource.paginator = this.paginator;
    });
  }
  lowercase(type: any) {

    if (type == 'number') {


      this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: any) =>
        data[sortHeaderId];
      this.dataSource.sort = this.sort;
    } else {
      this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: any) =>
        data[sortHeaderId].toLocaleLowerCase();
    }
  }

  announceSortChange(sortState: Sort) {
    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: any) =>
      this.lowercase(typeof data[sortHeaderId]);
    // if (sortState.direction) {
    //   this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    //   console.log('if');
    // } else {
    //   this._liveAnnouncer.announce('Sorting cleared');
    //   console.log('else');
    // }
  }
  sortColumn(event: Sort) {
    // debugger;
    if (event.active === 'title') {
      let products = this.mobiledata.products;
      if (event.direction === 'asc') {
        products.sort((a: any, b: any) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            this.dataSource.sortingDataAccessor = (
              data: any,
              sortHeaderId: any
            ) => data[sortHeaderId].toLocaleLowerCase();
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            this.dataSource.sortingDataAccessor = (
              data: any,
              sortHeaderId: any
            ) => data[sortHeaderId].toLocaleLowerCase();
            return 1;
          }
          return 0;
        });
      } else {
        products.sort((a: any, b: any) => {
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      this.dataSource.data = products;
      this.changeRef.detectChanges();
    }
  }
  //filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


