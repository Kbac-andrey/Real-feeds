import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
 // public isLoggedIn: boolean;
  public isLoggedIn = new Subject<boolean>();
  constructor(private http: HttpClient ) {}
  regestrationUser(user) {
    return this.http.post('http://localhost:3000/users ', user);
  }
  getLoginusers(userName, userPassword): any {
    return this.http.get(`http://localhost:3000/users?name=${userName}&password=${userPassword}`);
  }
  getUserById(userId) {
    return this.http.get('http://localhost:3000/users/' + userId);
  }
  isUserLoggedIn(): boolean {
    return localStorage.getItem('LogInUser') != null;
  }
  setStatusMessage(value: boolean) {
    this.isLoggedIn.next(value);
  }
  findgetLoggedUser(): string[] {
    if (localStorage.getItem('LogInUser') != null) {
      return JSON.parse(localStorage.getItem('LogInUser'));
    } else {
      return [];
    }
  }
}

