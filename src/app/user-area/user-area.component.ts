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
  public user: object = {};
  private routeSubscription: Subscription;

  constructor(private authService: AuthService, private activateRoute: ActivatedRoute) {
    this.routeSubscription = activateRoute.params.subscribe(params => this.userId = params['id']);
  }
  ngOnInit() {
    this.authService.getUserById(this.userId).subscribe(user => {
      this.user = user;
    });
  }

}
