import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
 // private logStatus = JSON.parse(localStorage.getItem('logIn') || 'false')
  constructor(private http: HttpClient ) {
  }
  // getUser( userEmail, userPassword) {
  //   return this.http.post('http://localhost:3000/users/' , userEmail, userPassword );
  // }
  regestrationUser(user) {
    return this.http.post('http://localhost:3000/users ', user);
  }
  getLoginusers(userName, userLastname) {
    // let localStorageItem = json.parse(localStorage.getItem('user'));
    // // return localStorageItem == null ? {} : localStorageItem.
    return this.http.get(`http://localhost:3000/users?name=${userName}&lastName=${userLastname}`);
  }

}
// setLoggeIn(value:boolean) {
//   this.logStatus = value
//   localStorage.setItem('logIn', 'true')
// }
// get isLoggestIn() {
//  return JSON.parse(localStorage.getItem('logIn') || this.logStatus)
// }
