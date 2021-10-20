import { InjectionToken, NgModule } from '@angular/core';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import {
  MatSnackBarConfig,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { environmentProd } from '../../environments/environment.prod';
import { API_ENDPOINT_PROVIDER, SHOULD_MOCK_PROVIDER } from './tokens';
export const MAT_LABEL_GLOBAL_OPTIONS = new InjectionToken(
  'mat-label-global-options'
);

const snackBarConfig: MatSnackBarConfig = {
  duration: 5000,
  horizontalPosition: 'end',
};

const matFormFieldConfig: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

@NgModule({
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: snackBarConfig,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldConfig,
    },
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
    {
      provide: API_ENDPOINT_PROVIDER,
      useValue: environmentProd.basePath,
    },
    {
      provide: API_ENDPOINT_PROVIDER,
      useValue: environmentProd.basePath,
    },
    {
      provide: SHOULD_MOCK_PROVIDER,
      useValue: environmentProd.mock,
    },
  ],
})
export class AppProvidersModule {}
