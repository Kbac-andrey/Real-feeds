import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import {NewsService} from './news-service.service';

@Injectable()
export class AuthService {
  public isLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient,  private newsService: NewsService ) {}

  regestrationUser(user) {
    return this.http.post('http://localhost:3000/users ', user);
  }
  editRegestrationUser(userId, user) {
    return this.http.put('http://localhost:3000/users/' + userId, user);
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
  findgetLoggedUser(): any[] {
    if (localStorage.getItem('LogInUser') != null) {
        return JSON.parse(localStorage.getItem('LogInUser'));
    } else {
        return [];
    }
  }
}

