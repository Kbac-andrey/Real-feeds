import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
 public isLoggedIn: boolean;
  constructor(private http: HttpClient ) {}
  regestrationUser(user) {
    return this.http.post('http://localhost:3000/users ', user);
  }
  getLoginusers(userName, userPassword): any {
    return this.http.get(`http://localhost:3000/users?name=${userName}&password=${userPassword}`);
  }
  isUserLoggedIn(): boolean {
    return localStorage.getItem('LogInUser') != null;
  }


}
// setLoggeIn(value:boolean) {
//   this.logStatus = value
//   localStorage.setItem('logIn', 'true')
// }
// get isLoggestIn() {
//  return JSON.parse(localStorage.getItem('logIn') || this.logStatus)
// }
