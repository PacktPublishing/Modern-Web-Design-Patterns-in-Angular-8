import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  redirectURL: string;
  isLogged: boolean;
  isAdmin: boolean;

  constructor() { }
}
