import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ListProductModule } from '../../components/list/list.module';
import { CreateProductModule } from '../../dialogs/create-product/create-product.module';
import { UpdateProductModule } from '../../dialogs/update-product/update-product.module';
import { ListComponent } from './list.page';

const COMMON_IMPORTS = [
  CommonModule,
  MatTableModule,
  FlexLayoutModule,
  MatButtonModule,
  ListProductModule,
  CreateProductModule,
  MatIconModule,
  UpdateProductModule,
];

const COMMON_DECLARATIONS = [ListComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class ListModule {}
