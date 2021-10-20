import {
  Directive,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Directive()
export abstract class FormBase<T = any> {
  @Input() isSubmitting: boolean = false;

  @Output('onSubmit') _submit = new EventEmitter();

  @ViewChild(FormGroupDirective, { static: true })
  form!: FormGroup;

  onSubmit(): void {
    this._submit.emit(this.getFormValue());
  }

  reset(value?: any) {
    this.form.reset();
  }

  isFormValid(): boolean {
    return this.form.valid;
  }

  isFormInvalid(): boolean {
    return this.form.invalid;
  }

  isFormPending(): boolean {
    return this.form.pending;
  }

  getFormValue(): T {
    return this.form.value;
  }

  shouldDisable(): boolean {
    return this.isFormInvalid() || this.isFormPending();
  }
}
