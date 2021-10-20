import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MOCK_USERS } from 'src/app/shared/mocks/users';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { CreateUserComponent } from '../../dialogs/create-user/create-user.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPageComponent implements OnInit {
  constructor(public dialog: MatDialog, private userService: UserService) {}

  arrayUser: User[] = [];
  users$: User[] = MOCK_USERS;

  ngOnInit(): void {}

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users$ = data;
      this.arrayUser = data;
    });
  }

  openDialog() {
    this.dialog
      .open(CreateUserComponent)
      .beforeClosed()
      .subscribe((data) => {
        const newUser = {
          clave: this.users$.length + 1,
          ...data,
        };
        this.users$.push(newUser);
      });
  }

  remove(payload: { index: number; user: User }) {
    const newValues: User[] = this.users$;
    newValues.splice(payload.index, 1);

    console.log(this.users$);

    return (this.users$ = newValues);
  }

  update(payload: { index: number; user: User }) {}

  ngOnDestroy(): void {}
}
