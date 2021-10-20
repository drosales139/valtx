import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'list-product',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() dataSource: Product[] = [];
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  displayedColumns: string[] = ['codProd', 'name', 'price', 'actions'];

  constructor() {}

  ngOnInit(): void {}

  onDelete(index: number, user: User): void {
    this.delete.emit({ index, user });
  }

  onUpdate(index: number, user: User): void {
    this.update.emit({ index, user });
  }
}
