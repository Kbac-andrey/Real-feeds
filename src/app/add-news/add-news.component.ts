import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  private routeSubscriptiontwo: Subscription;
  public userId: number;
  public user: object = {};
  public article: object = {}
  constructor( private http: HttpClient, public authService: AuthService, private activateRoute: ActivatedRoute, private router: Router) {
    this.routeSubscriptiontwo = activateRoute.params.subscribe(params => this.userId = params['id']);
  }
  addNews(newsdata): void {
    this.article = {
      'title': newsdata.inputTitleNews,
      'lorem': newsdata.inputTextNews,
      'userLikes': []
    };
    this.authService.getUserById(this.userId).subscribe(user => {
      console.log(this.userId)
      console.log(user)
      this.user = user;
      console.log(this.user)
    });
  }

  ngOnInit() {

  }

}
