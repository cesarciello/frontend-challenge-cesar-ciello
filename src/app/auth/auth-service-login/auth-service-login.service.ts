import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceLoginService {

  constructor() { }

  setNewToken() {
    const newToken = Math.floor((Math.random()) * 0x10000)
      .toString(16);
    localStorage.setItem('token', newToken);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }
}
