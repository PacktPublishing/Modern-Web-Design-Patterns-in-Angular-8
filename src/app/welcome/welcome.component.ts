import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input() name: string;
  userIsLoggedIn = false;
  isLoggedInClass = 'is-logged-in';
  states = ['Florida', 'Ohio', 'California', 'Texas'];
  cars = [
    {
      color: 'blue',
      name: 'chevy',
      purchased: new Date()
    },
    {
      color: 'red',
      name: 'ford',
      purchased: new Date()
    },
    {
      color: 'green',
      name: 'dodge',
      purchased: new Date()
    }
  ];
  carColor: string;

  constructor(private renderer: Renderer2) {
  }

  addCar() {
    const newCar = {
      color: 'green',
      name: 'gmc',
      purchased: new Date()
    };
    this.cars.push(newCar);
    // this.cars = [].concat(this.cars).concat(newCar);
  }

  getStates() {
    return this.states.map(state => state.toUpperCase());
  }

  isLoggedIn() {
    return this.userIsLoggedIn;
  }

  login() {
    this.userIsLoggedIn = !this.userIsLoggedIn;
  }

  ngOnInit() {
    const element = document.getElementById('welcome-message');
    // element.classList.add('is-logged-in'); 
    // element.style.width = '30px';
    // this.renderer.addClass(element, 'is-logged-in');
    // this.renderer.setStyle(element, 'color', 'red');
    console.log(this.cars);
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
