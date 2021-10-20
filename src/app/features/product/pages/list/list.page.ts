import { Component, OnInit } from '@angular/core';
import { MOCK_PRODUCTS } from 'src/app/shared/mocks/product';
import { Product } from 'src/app/shared/models/product';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListComponent implements OnInit {
  constructor(private userService: UserService) {}

  products: Product[] = MOCK_PRODUCTS;

  ngOnInit(): void {
    // this.userService.getUsers().subscribe((data) => {
    //   this.users$ = data;
    //   this.arrayUser = data;
    // });
  }

  remove(payload: { index: number; user: User }) {
    const newValues: Product[] = this.products;
    newValues.splice(payload.index, 1);

    console.log(this.products);

    return (this.products = newValues);
  }

  update(payload: { index: number; user: User }) {}
}
