import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { CreateUserComponent } from '../../dialogs/create-user/create-user.component';
import { UpdateUserComponent } from '../../dialogs/update-user/update-user.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPageComponent implements OnInit {
  constructor(public dialog: MatDialog, private userService: UserService) {}

  users: User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  openDialog() {
    this.dialog
      .open(CreateUserComponent)
      .beforeClosed()
      .subscribe((data) => {
        if (!!data) {
          const newUser = {
            clave: this.users.length + 1,
            name: data.name,
            user: data.user,
            password: data.password,
            cod_sucursal: data.cod_sucursal,
          };

          this.users.push(newUser);
          this.users = [...this.users];
        }
      });
  }

  remove(payload: { index: number; user: User }) {
    const newValues: User[] = this.users;
    newValues.splice(payload.index, 1);
    this.users = [...newValues];
  }

  update(payload: { index: number; user: User }) {
    this.dialog
      .open(UpdateUserComponent, { data: payload.user })
      .beforeClosed()
      .subscribe((data) => {
        if (!!data) {
          this.users[payload.index] = data;
          this.users = [...this.users];
        }
      });
  }
}
