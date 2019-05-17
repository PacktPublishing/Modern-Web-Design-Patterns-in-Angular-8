import { Directive } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatches]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: PasswordMatchesDirective, multi: true
    }
  ]
})
export class PasswordMatchesDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const password = control.get('password');
    const confirm = control.get('confirm');

    if (!password || !confirm) {
      return null;
    }

    if (password.value !== confirm.value) {
      return { 'nomatch': true };
    }

    return null;
  }

}
