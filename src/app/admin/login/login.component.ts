import { Component, OnInit } from '@angular/core';
import { WelcomeService } from 'src/app/welcome/welcome.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private welcomeService: WelcomeService) { }

  ngOnInit() {

  }

  getPerson() {
    return this.welcomeService.getPerson();
  }

}
