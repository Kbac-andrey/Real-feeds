import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {trigger, state, animate, transition, style} from "@angular/animations";
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {NewsService} from '../services/news-service.service';
import {ConfirmationWindowComponent} from '../confirmation-window/confirmation-window.component';


@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css'],
  // animations: [
  //   trigger('visibilityChanged', [
  //     state('show', style({ display: 'block', opacity: 1, transform: 'scale(1.0)' })),
  //     state('hide', style({ display: 'none', opacity: 0, transform: 'scale(0.0)'  })),
  //     transition('show => hide', animate('900ms')),
  //     transition('hide => show', animate('900ms'))
  //   ])
  // ],
})
export class UserAreaComponent implements OnInit {
  public showEditFormArray: any[] = []
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

  // setValueForToggleArticle() {
  //   for (let i = 0; i < this.user['articles'].length; i++) {
  //     this.showEditFormArray.push('hide');
  //   }
  // }
  toggleforEditArticle (i) {
    // this.showEditFormArray[i] = this.showEditFormArray[i] === 'show' ? 'hide' : 'show';
    this.showEditFormArray[i] = !this.showEditFormArray[i]
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


  delete(userarticle) {
    this.user['articles'].splice(this.user['articles'].indexOf(userarticle), 1)
    this.newsService.deleteNews(this.userId, this.user).subscribe( user => {
    });
  }
  editArticle(changedArticle) {
    let newArticle = {
      'title': changedArticle.lorem,
      'lorem': changedArticle.title,
    };
    this.authService.editRegestrationUser(this.userId, this.user).subscribe(user => {
      this.logInuser.push(user)
      localStorage.setItem('LogInUser', JSON.stringify(this.logInuser));
    });
    for (let i = 0; i < this.showEditFormArray.length; i++){
      this.showEditFormArray[i] = false;
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
        // this.setValueForToggleArticle();
      this.checkUserstatus();
    });
    this.checkUserstatus();
    this.newsService.fetchAllInformattion().subscribe(allUsersWithArticles => {
      this.usersWthLikes = allUsersWithArticles;
    });

  }
}
