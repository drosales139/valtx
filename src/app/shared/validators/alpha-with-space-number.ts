import { AbstractControl, ValidatorFn } from '@angular/forms';

export const ALPHA_WITH_SPACE_AND_NUMBER_REGEX = /^[a-zA-Z\-%/][\d%\-\.,/a-zA-ZÀ-ž\s]+$/;

export const alphaWithSpaceNumberValidator: ValidatorFn = ({
  value,
}: AbstractControl) => {
  if (!value) return null;

  return ALPHA_WITH_SPACE_AND_NUMBER_REGEX.test(value)
    ? null
    : { alphaWithSpaceAndNumber: true };
};
