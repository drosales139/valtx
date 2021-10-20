import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NAME_REGEX } from 'src/app/shared/constants';
import { Office } from 'src/app/shared/models/office';
import { alphaWithSpaceValidator } from 'src/app/shared/validators/alpha-with-space';
import { whitespaceValidator } from 'src/app/shared/validators/whitespace.validator';

@Component({
  selector: 'create-office-form',
  templateUrl: './create-office-form.component.html',
  styleUrls: ['./create-office-form.component.scss'],
})
export class CreateOfficeFormComponent implements OnInit {
  form: FormGroup;
  clave: boolean = false;
  @Output('onSubmit') _submit = new EventEmitter();
  hide = true;

  @Input() set data(data: Office) {
    if (data) {
      this.form.setValue(data);
      this.clave = true;
    }
  }

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
