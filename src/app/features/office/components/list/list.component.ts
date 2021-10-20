import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Office } from 'src/app/shared/models/office';

@Component({
  selector: 'list-office',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() dataSource: Office[] = [];
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  displayedColumns: string[] = ['codSuc', 'name', 'actions'];

  constructor() {}

  ngOnInit(): void {}

  onDelete(index: number, office: Office): void {
    this.delete.emit({ index, office });
  }

  onUpdate(index: number, office: Office): void {
    this.update.emit({ index, office });
  }
}
