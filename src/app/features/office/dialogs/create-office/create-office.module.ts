import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateOfficeFormModule } from '../../components/create-office-form/create-office-form.module';
import { CreateOfficeComponent } from './create-office.component';

const COMMON_IMPORTS = [
  CommonModule,
  MatDialogModule,
  MatButtonModule,
  FlexLayoutModule,
  CreateOfficeFormModule,
];
const COMMON_DECLARATIONS = [CreateOfficeComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class CreateOfficeModule {}
