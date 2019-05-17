import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appForbiddenValidator]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true
    }
  ]
})
export class ForbiddenValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    if (!control) {
      return null;
    }

    const isForbidden = control.value === 'david';

    if (isForbidden) {
      return { 'isForbidden': { value: control.value } };
    }

    return null;
  }

}
