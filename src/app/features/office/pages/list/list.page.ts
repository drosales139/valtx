import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Office } from 'src/app/shared/models/office';
import { User } from 'src/app/shared/models/user.model';
import { OfficeService } from 'src/app/shared/services/office.service';
import { CreateOfficeComponent } from '../../dialogs/create-office/create-office.component';
import { UpdateOfficeComponent } from '../../dialogs/update-office/update-office.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListComponent implements OnInit {
  constructor(private officeService: OfficeService, public dialog: MatDialog) {}

  offices: Office[] = [];

  ngOnInit(): void {
    this.getOffices();
  }

  getOffices() {
    this.officeService.getOffices().subscribe((data) => {
      this.offices = data;
    });
  }
  openDialog() {
    this.dialog
      .open(CreateOfficeComponent)
      .beforeClosed()
      .subscribe((data) => {
        if (!!data) {
          this.offices.push(data);
          this.offices = [...this.offices];
        }
      });
  }

  remove(payload: { index: number; user: User }) {
    const newValues: Office[] = this.offices;
    newValues.splice(payload.index, 1);
    this.offices = [...newValues];
  }

  update(payload: { index: number; office: Office }) {
    this.dialog
      .open(UpdateOfficeComponent, { data: payload.office })
      .beforeClosed()
      .subscribe((data) => {
        if (!!data) {
          this.offices[payload.index] = data;
          this.offices = [...this.offices];
        }
      });
  }
}
