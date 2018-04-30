import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  public articleId: number;
  public userName: string;
  public articleTitle: string;
  // public logInuser: any[] = [];
  // public user: object = {};
  // public userDataForm: object = {};
  // public StatusMessage: boolean = true;

  constructor( private http: HttpClient, private newsService: NewsService, router: Router) { }
  toggleFavorite() {
    this.newsService.getArticleById(this.articleId, this.userName, this.articleTitle).subscribe(article => {
      console.log(article);
    });
  }
  ngOnInit() {

    // this.newsService.getUserById(this.userId).subscribe(user => {
    //   this.user = user;
    //   this.checkUserstatus();
    // });
  }

}
