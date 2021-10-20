import { AbstractControl, ValidatorFn } from '@angular/forms';

const DECIMAL_REGEX = /^\d*(\.\d{1,2})?$/;

export const decimalValidator: ValidatorFn = ({
    value
}: AbstractControl) => {
    if (!value) return null;

    return DECIMAL_REGEX.test(value) ? null : { decimal: true }
}