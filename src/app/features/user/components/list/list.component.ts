import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'list-user',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() dataSource: User[] = [];
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  displayedColumns: string[] = [
    'codUser',
    'name',
    'password',
    'user',
    'codOffice',
    'actions',
  ];

  constructor() {}

  ngOnInit(): void {}

  onDelete(index: number, user: User): void {
    this.delete.emit({ index, user });
  }

  onUpdate(index: number, user: User): void {
    this.update.emit({ index, user });
  }
}
