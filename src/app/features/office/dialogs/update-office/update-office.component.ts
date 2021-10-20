import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Office } from 'src/app/shared/models/office';

@Component({
  selector: 'app-update-office',
  templateUrl: './update-office.component.html',
  styleUrls: ['./update-office.component.scss'],
})
export class UpdateOfficeComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Office,
    public dialogRef: MatDialogRef<UpdateOfficeComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit(payload: Office) {
    this.dialogRef.close(payload);
  }
}
