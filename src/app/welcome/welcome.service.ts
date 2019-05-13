import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  private person = {
    name: 'david',
    age: 21,
    gender: 'male'
  };

  constructor() { }

  public getPerson() {
    return this.person;
  }

  public updatePersonName(name: string) {
    this.person.name = name;
  }
}
