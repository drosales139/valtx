import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NAME_REGEX } from 'src/app/shared/constants';
import { MOCK_OFFICES } from 'src/app/shared/mocks/offices';
import { alphaWithSpaceValidator } from 'src/app/shared/validators/alpha-with-space';
import { whitespaceValidator } from 'src/app/shared/validators/whitespace.validator';

@Component({
  selector: 'create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss'],
})
export class CreateUserFormComponent implements OnInit {
  form: FormGroup;
  @Output('onSubmit') _submit = new EventEmitter();
  hide = true;

  offices = MOCK_OFFICES;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.pattern(NAME_REGEX),
          alphaWithSpaceValidator,
          whitespaceValidator,
        ],
      ],
      user: [
        null,
        [
          Validators.required,
          Validators.pattern(NAME_REGEX),
          alphaWithSpaceValidator,
          whitespaceValidator,
        ],
      ],
      password: ['', [Validators.required]],
      cod_sucursal: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this._submit.emit(this.form.value);
  }

  shouldDisable(): boolean {
    return this.form.invalid || this.form.pending;
  }

  reset() {
    this.form.reset();
  }
}
