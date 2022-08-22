import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.component.html',
  styleUrls: ['./image-model.component.scss'],
})
export class ImageModelComponent implements OnInit {
  getImageUrl: String = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ImageModelComponent>
  ) {
    if (data) {
      this.getImageUrl = data.imageUrl || this.getImageUrl;
    }
  }

  // onConfirmClick(): void {
  //   this.dialogRef.close(true);
  // }
  ngOnInit(): void {}
}
