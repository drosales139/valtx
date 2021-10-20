import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService,
    public dialogRef: MatDialogRef<CreateUserComponent>
  ) {}

  ngOnInit(): void {}

  close() {}

  onSubmit(payload: User) {
    this.dialogRef.close(payload);
    // this.response = payload;
    // this.userService.createUser(payload);
  }
}
