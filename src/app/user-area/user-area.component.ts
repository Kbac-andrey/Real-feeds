import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {
  public userId: number;
  logInuser: string[] = [];
  public user: object = {};
  public StatusMessage: boolean = true;
  private routeSubscription: Subscription;

  constructor(private authService: AuthService, private activateRoute: ActivatedRoute) {
    this.routeSubscription = activateRoute.params.subscribe(params => this.userId = params['id']);
  }
  checkUserstatus() {
    this.logInuser = this.authService.findgetLoggedUser();
    for (let i = 0; i < this.logInuser.length; i++) {
       if (this.logInuser[i]['id'] === this.user['id']) {
          this.StatusMessage = false;
       }  else {
            this.StatusMessage = true;
       }
    }
  }
  ngOnInit() {
    this.authService.getUserById(this.userId).subscribe(user => {
      this.user = user;
      this.checkUserstatus();
    });
    this.checkUserstatus();
  }

}
