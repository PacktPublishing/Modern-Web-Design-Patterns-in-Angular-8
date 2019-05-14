import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  // profileForm = new FormGroup({
  //   firstName: new FormControl('David'),
  //   lastName: new FormControl('Acosta'),
  //   address: new FormGroup({
  //     city: new FormControl('Hollywood'),
  //     state: new FormControl('CA')
  //   })
  // });

  profileForm = this.fb.group({
    firstName: ['David'],
    lastName: ['Acosta'],
    address: this.fb.group({
      city: ['Hollywood'],
      state: ['CA']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

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
