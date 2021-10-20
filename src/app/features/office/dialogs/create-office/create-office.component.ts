import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Office } from 'src/app/shared/models/office';

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.scss'],
})
export class CreateOfficeComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Office,
    public dialogRef: MatDialogRef<CreateOfficeComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit(payload: Office) {
    this.dialogRef.close(payload);
  }
}
