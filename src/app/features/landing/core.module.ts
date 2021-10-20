import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CoreLayout } from './core.layout';
import { MatButtonModule } from '@angular/material/button';

const COMMON_IMPORTS = [
  CommonModule,
  MatSidenavModule,
  RouterModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
];
const COMMON_DECLARATIONS = [CoreLayout];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class LayoutModule {}
