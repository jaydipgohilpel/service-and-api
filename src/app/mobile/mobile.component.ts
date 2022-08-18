import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { AllServiceService } from '../service/all-service.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  image: string;
}
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent implements OnInit {
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
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
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
  }

  //filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //image dialoag model
  openDialog(url: String) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: { image: url },
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
