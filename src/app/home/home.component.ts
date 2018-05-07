import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showLogOut: boolean = true;
   public logInuser: string[] = [];
  public logInuserId: number;
  constructor(public authService: AuthService, private http: HttpClient, private router: Router) {
  }
  getUserIsLoggedInId () {
    this.logInuser = this.authService.findgetLoggedUser();
    for (let i = 0; i < this.logInuser.length; i++) {
      this.logInuserId = this.logInuser[i]['id'];
    }
  }
  ngOnInit() {
    this.authService.isLoggedIn.subscribe(value => {
      this.showLogOut = value;
      this.getUserIsLoggedInId();
    });
    this.showLogOut = this.authService.isUserLoggedIn();
    this.getUserIsLoggedInId();
  }

}
