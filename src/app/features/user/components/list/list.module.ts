import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ListComponent } from './list.component';

const COMMON_IMPORTS = [
  CommonModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  FlexLayoutModule,
];

const COMMON_DECLARATIONS = [ListComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class ListModule {}
