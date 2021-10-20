import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateProductFormModule } from '../../components/create-product-form/create-product-form.module';
import { UpdateProductComponent } from './update-product.component';

const COMMON_IMPORTS = [
  CommonModule,
  MatDialogModule,
  MatButtonModule,
  FlexLayoutModule,
  CreateProductFormModule,
];
const COMMON_DECLARATIONS = [UpdateProductComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class UpdateProductModule {}
