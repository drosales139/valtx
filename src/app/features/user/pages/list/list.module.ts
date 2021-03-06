import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ListModule } from '../../components/list/list.module';
import { CreateUserModule } from '../../dialogs/create-user/create-user.module';
import { UpdateUserModule } from '../../dialogs/update-user/update-user.module';
import { ListPageComponent } from './list.page';

const COMMON_IMPORTS = [
  CommonModule,
  MatTableModule,
  ListModule,
  FlexLayoutModule,
  MatButtonModule,
  CreateUserModule,
  UpdateUserModule,
  MatIconModule,
];

const COMMON_DECLARATIONS = [ListPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class ListPageModule {}
