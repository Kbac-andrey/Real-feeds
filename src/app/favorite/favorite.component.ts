import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NewsService} from '../services/news-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  public articleId: number;
  public userName: string;
  public articleTitle: string;
  public logInuser: any[] = [];
  public logInuserId: number;
  // @Output() userArticle = new EventEmitter<object>();
  @Output() like: EventEmitter<any> = new EventEmitter();

  constructor( private http: HttpClient, private newsService: NewsService, private authService: AuthService, private router: Router) { }

  like() {

  }
  // toggleFavorite(userId) {
  //   this.logInuser = this.authService.findgetLoggedUser();
  //     console.log(this.logInuser);
  //     if (this.logInuser.length === 0) {
  //       this.router.navigate(['/login']);
  //       // return;
  //     } else {
  //       this.newsService.favorite(this.userId).subscribe(newsuser => {
  //         newsuser = this.news['id'];
  //         console.log(this.news);
  //         console.log(this.userId);
  //       });
  //       console.log(this.news)
  //       this.CountLikes++;
  //     }
  //
  // }

    // this.newsService.getArticleById(this.articleId, this.userName, this.articleTitle).subscribe(article => {
    //   console.log(article);
    // });
  ngOnInit() {

    // this.newsService.getUserById(this.userId).subscribe(user => {
    //   this.user = user;
    //   this.checkUserstatus();
    // });
  }

}
