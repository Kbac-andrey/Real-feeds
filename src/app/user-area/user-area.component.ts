import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {NewsService} from '../services/news-service.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {
  public userId: number;
  public logInuser: any[] = [];
  public user: object = {};
  public usersWthLikes: object;
  public userDataForm: object = {};
  public StatusMessage: boolean = true;
  private routeSubscription: Subscription;

  constructor(private authService: AuthService, private newsService: NewsService, private router: Router, private activateRoute: ActivatedRoute) {
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
  editUser(userData) {
    this.userDataForm = {
      'avatar': this.user['avatar'],
      'name': userData.name,
      'lastName': userData.lastName,
      'email': userData.email,
      'password': userData.password,
      'country': userData.country,
      'phoneNumber': userData.phoneNumber,
      'city': userData.city,
      'dateOfBirth': userData.dateOfBirth
    };
    this.authService.editRegestrationUser(this.userId, this.user).subscribe(user => {
      this.logInuser.push(user)
      localStorage.setItem('LogInUser', JSON.stringify(this.logInuser));
    });
  }
  ngOnInit() {
    this.authService.getUserById(this.userId).subscribe(user => {
      this.user = user;
      console.log(this.user)
      this.checkUserstatus();
    });
    this.checkUserstatus();
    this.newsService.fetchAllInformattion().subscribe(allUsersWithArticles => {
      this.usersWthLikes = allUsersWithArticles;
    });
  }
}
