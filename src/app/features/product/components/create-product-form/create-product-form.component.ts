import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NAME_REGEX } from 'src/app/shared/constants';
import { Product } from 'src/app/shared/models/product';
import { alphaWithSpaceValidator } from 'src/app/shared/validators/alpha-with-space';
import { whitespaceValidator } from 'src/app/shared/validators/whitespace.validator';

@Component({
  selector: 'create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss'],
})
export class CreateProductFormComponent implements OnInit {
  form: FormGroup;
  clave: boolean = false;
  @Output('onSubmit') _submit = new EventEmitter();
  hide = true;

  @Input() set data(data: Product) {
    if (data) {
      this.form.setValue(data);
      this.clave = true;
    }
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      cod_producto: [null, [Validators.required]],
      name: [
        null,
        [
          Validators.required,
          Validators.pattern(NAME_REGEX),
          alphaWithSpaceValidator,
          whitespaceValidator,
        ],
      ],
      price: [null, [Validators.required]],
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
