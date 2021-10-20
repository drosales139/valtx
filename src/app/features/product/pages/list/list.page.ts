import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/shared/models/product';
import { User } from 'src/app/shared/models/user.model';
import { ProductService } from 'src/app/shared/services/products.service';
import { CreateProductComponent } from '../../dialogs/create-product/create-product.component';
import { UpdateProductComponent } from '../../dialogs/update-product/update-product.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListComponent implements OnInit {
  constructor(private userService: ProductService, public dialog: MatDialog) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.userService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openDialog() {
    this.dialog
      .open(CreateProductComponent)
      .beforeClosed()
      .subscribe((data) => {
        if (!!data) {
          this.products.push(data);
          this.products = [...this.products];
        }
      });
  }

  remove(payload: { index: number; products: Product }) {
    const newValues: Product[] = this.products;
    newValues.splice(payload.index, 1);
    this.products = [...newValues];
  }

  update(payload: { index: number; user: User }) {
    this.dialog
      .open(UpdateProductComponent, { data: payload.user })
      .beforeClosed()
      .subscribe((data) => {
        if (!!data) {
          this.products[payload.index] = data;
          this.products = [...this.products];
        }
      });
  }
}
