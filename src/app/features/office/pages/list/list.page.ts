import { Component, OnInit } from '@angular/core';
import { MOCK_OFFICES } from 'src/app/shared/mocks/offices';
import { Office } from 'src/app/shared/models/office';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListComponent implements OnInit {
  constructor(private userService: UserService) {}

  offices: Office[] = MOCK_OFFICES;

  ngOnInit(): void {
    // this.userService.getUsers().subscribe((data) => {
    //   this.users$ = data;
    //   this.arrayUser = data;
    // });
  }

  remove(payload: { index: number; user: User }) {
    const newValues: Office[] = this.offices;
    newValues.splice(payload.index, 1);

    console.log(this.offices);

    return (this.offices = newValues);
  }

  update(payload: { index: number; user: User }) {}
}
