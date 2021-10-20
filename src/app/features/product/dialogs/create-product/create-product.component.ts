import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,

    public dialogRef: MatDialogRef<CreateProductComponent>
  ) {}

  ngOnInit(): void {}

  close() {}

  onSubmit(payload: Product) {
    this.dialogRef.close(payload);
  }
}
