import { Component, OnInit, ViewChild } from '@angular/core';
import { AllServiceService } from '../service/all-service.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ImageModelComponent } from '../image-model/image-model.component';

export interface DialogData {
  image: string;
}
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent implements OnInit {
  mobileData: any;
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
  // private changeRef: ChangeDetectorRef,
  constructor(private http: AllServiceService, public dialog: MatDialog) {}

  ngOnInit() {
    this.http.getApiData().subscribe((data) => {
      this.mobileData = data;

      console.log(this.mobileData.products);
      this.dataSource = new MatTableDataSource(this.mobileData.products); // Or this.dataSource = this.mobileData.products;

      this.dataSource.sort = this.sort;
      //default title assecnding order
      const sortState: Sort = { active: 'title', direction: 'asc' };
      this.dataSource.sort.active = sortState.active;
      this.dataSource.sort.direction = sortState.direction;
      this.dataSource.sort.sortChange.emit(sortState);
      this.dataSource.paginator = this.paginator;
    });
  }
  lowerCase(type: any) {
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
      this.lowerCase(typeof data[sortHeaderId]);
  }

  //filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public imageModelDisplay = false;
  //image dialoag model
  openAlertDialog(url: String) {
    const dialogRef = this.dialog.open(ImageModelComponent, {
      data: {
        imageUrl: url,
      },
    });
  }
}
