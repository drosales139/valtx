import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ListOfficeModule } from '../../components/list/list.module';
import { ListComponent } from './list.page';

const COMMON_IMPORTS = [
  CommonModule,
  MatTableModule,
  FlexLayoutModule,
  MatButtonModule,
  ListOfficeModule,
];

const COMMON_DECLARATIONS = [ListComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class ListModule {}
