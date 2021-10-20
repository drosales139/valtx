import { AbstractControl, ValidatorFn } from '@angular/forms';

const DIGITS_REGEX = /^[0-9]+$/;
const DIGITS_REGEX_2 = /^[1-9]+$/;

export const digitsValidator: ValidatorFn = ({
    value,
  }: AbstractControl) => {
    if (!value) return null;
  
    return DIGITS_REGEX.test(value) ? null : { digits: true };
  };

  export const digitsValidatorMoreThanZero: ValidatorFn = ({
    value,
  }: AbstractControl) => {
    if (!value) return null;
  
    return DIGITS_REGEX_2.test(value) ? null : { digits: true };
  };
  