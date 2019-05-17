import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  // profileForm = new FormGroup({
  //   firstName: new FormControl('David', [
  //     Validators.required,
  //     Validators.minLength(5)
  //   ]
  //   ),
  //   lastName: new FormControl('Acosta'),
  //   address: new FormGroup({
  //     city: new FormControl('Hollywood'),
  //     state: new FormControl('CA')
  //   }),
  //   aliases: new FormArray([])
  // });

  get firstName() {
    return this.profileForm.get('firstName');
  }

  profileForm = this.fb.group({
    firstName: ['David', [
      Validators.required,
      Validators.minLength(5),
      this.forbiddenNameValidator()
    ]],
    lastName: ['Acosta'],
    address: this.fb.group({
      city: ['Hollywood'],
      state: ['CA']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ]),
    password: [''],
    confirm: ['']
  }, { validators: this.passwordMatchesValidator() });

  passwordMatchesValidator(): ValidatorFn {
    return (control: FormGroup): ValidationErrors => {
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

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control('New Alias!'));
  }

  onSubmit() {
    console.log(this.profileForm);
  }

  updateProfile() {
    // this.profileForm.get('firstName').setValue('Nancy');
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        state: 'FL'
      }
    })
  }

}
