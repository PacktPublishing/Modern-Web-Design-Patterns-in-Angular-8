import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

  name = new FormControl('David');

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

}
