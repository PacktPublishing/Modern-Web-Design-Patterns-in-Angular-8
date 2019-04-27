import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input() name: string;
  userIsLoggedIn = false;

  constructor() {
    // console.log(this.name);
  }

  isLoggedIn() {
    return this.userIsLoggedIn;
  }

  login() {
    this.userIsLoggedIn = !this.userIsLoggedIn;
  }

  ngOnInit() {
    this.name = this.name.toUpperCase();
    console.log(this.name);
  }

  setUpperCase() {
    this.name = this.name.toUpperCase();
  }

  displayName() {
    alert(this.name);
  }

  getName() {
    return this.name;
  }

  updateName($event: Event) {
    const element = $event.target as HTMLInputElement;
    this.name = element.value;
  }

}
