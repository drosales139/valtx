import { NgModule } from '@angular/core';
import {
  MatSnackBarConfig,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';

const defaultOptions: MatSnackBarConfig = {
  duration: 5000,
  horizontalPosition: 'end',
  verticalPosition: 'top',
};

@NgModule({
  imports: [MatSnackBarModule],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: defaultOptions,
    },
  ],
})
export class SnackbarProviderModule {}
