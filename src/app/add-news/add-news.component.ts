import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {HttpClient} from '@angular/common/http';
import {NewsService} from '../services/news-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  private routeSubscriptiontwo: Subscription;
  public StatusMessage: boolean = true;
  public userId: number;
  public user: object = {};
  public article: object = {}
  @ViewChild('newNews') newUserForm: NgForm;

  constructor( private http: HttpClient, public authService: AuthService, private newsService: NewsService, public newsservice: NewsService, private activateRoute: ActivatedRoute, private router: Router) {
    this.routeSubscriptiontwo = activateRoute.params.subscribe(params => this.userId = params['id']);
  }

  addNews(newNews): void {
    this.article = {
      'idArticle': 0,
      'title': newNews.inputTitleNews,
      'lorem': newNews.inputTextNews,
      'dataforpost': Date(),
      'userLikes': []
    };
    this.authService.getUserById(this.userId).subscribe(user => {
      this.article = newNews
      this.user = user
      this.article['idArticle'] = this.user['articles'].length;
      this.article['dataforpost'] = Date();
      this.article['userLikes'] = [];
      this.user['articles'].push(this.article);
      this.newsservice.addnews(this.userId, this.user).subscribe( user => {
        this.router.navigate(['']);
      });



      this.newUserForm.reset();
    });
  }

  ngOnInit() {

  }

}
