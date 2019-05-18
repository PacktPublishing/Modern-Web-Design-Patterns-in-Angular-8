import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((resolverData: { users: User[] }) => {
      this.users = resolverData.users;
      console.log(this.users);
    });
  }

  confirm() {
    const confirmation = window.confirm('Are you sure you wish to navigate away?');
    return of(confirmation);
  }
}
