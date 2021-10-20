import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateUserFormModule } from '../../components/create-user-form/create-user-form.module';
import { CreateUserComponent } from './create-user.component';

const COMMON_IMPORTS = [
  CommonModule,
  MatDialogModule,
  MatButtonModule,
  FlexLayoutModule,
  CreateUserFormModule,
];
const COMMON_DECLARATIONS = [CreateUserComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class CreateUserModule {}
