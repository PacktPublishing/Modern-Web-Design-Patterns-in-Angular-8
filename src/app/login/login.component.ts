import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  toggleLogin() {
    this.appService.isLogged = true;
    if (this.appService.redirectURL) {
      this.router.navigate([this.appService.redirectURL]);
      this.appService.redirectURL = null;
    } else {
      this.router.navigate(['/users']);
    }
  }

  toggleAdmin() {
    this.appService.isAdmin = true;
  }

}
