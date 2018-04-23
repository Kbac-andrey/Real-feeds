import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logInuser: string[];
  logInuserId: number;
  private routeSubscription: Subscription;
  constructor(public authService: AuthService, private router: Router, private activateRoute: ActivatedRoute) {
    this.routeSubscription = activateRoute.params.subscribe(params => this.logInuserId = params['id']);
  }
  ngOnInit() {
    this.logInuser = this.authService.findallLoginUsers();
    for (let i = 0; i < this.logInuser.length; i++) {
      this.logInuserId = this.logInuser[i]['id']
      console.log(this.logInuser[i]['id']);
    }
  }

}
