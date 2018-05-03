import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NewsService } from '../services/news-service.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public news: object;
  // public lastArticles: object;
  // public allArticles: Array<any>[];
  public logInuserId: number;
  public idUserWithCorrentArticle: number;
  public idCorrentArticle: number;
  // public UsernameOfArticle: string;
  logInuser: string[] = [];
  // CountLikes: number = 0;
  // @Output() onToggle = new EventEmitter<number>();


  constructor( private http: HttpClient, private newsService: NewsService, private authService: AuthService, private router: Router) {
  }

  onLike(idUserWithCorrentArticle: number, idCorrentArticle: number) {
    this.logInuser = this.authService.findgetLoggedUser();
        if (this.logInuser.length === 0) {
          this.router.navigate(['/login']);
        } else {
          this.idUserWithCorrentArticle = idUserWithCorrentArticle;
          this.idCorrentArticle = idCorrentArticle;
          for (let i = 0; i < this.logInuser.length; i++) {
            this.logInuserId = this.logInuser[i]['id'];
            this.news['userLikes'].push(this.logInuserId);
          }
            // this.authService.getUserById()
          // for (let key in this.news ) {
          // idUserWithCorrentArticle = this.news[key]['id'];
          // console.log(idUserWithCorrentArticle);
            // for (let i = 0; i < this.logInuser.length; i++) {
            //    this.logInuserId = this.logInuser[i]['id'];
            //   this.lastArticles['userLikes'].push(this.logInuserId);
            //   // this.onToggle.emit(logInuserIdForpush)
            //   this.newsService.getArticleById(this.lastArticles['id'], this.UsernameOfArticle, this.lastArticles ).subscribe(article => {
            //     console.log(article);
            //   });
        }
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
  // onLike(logInuserIdForpush: any) {
  //   this.logInuser = this.authService.findgetLoggedUser();
  //       if (this.logInuser.length === 0) {
  //         this.router.navigate(['/login']);
  //       } else {
  //           for (let i = 0; i < this.logInuser.length; i++) {
  //              this.logInuserId = this.logInuser[i]['id'];
  //             this.lastArticles['userLikes'].push(this.logInuserId);
  //             // this.onToggle.emit(logInuserIdForpush)
  //             this.newsService.getArticleById(this.lastArticles['id'], this.UsernameOfArticle, this.lastArticles ).subscribe(article => {
  //               console.log(article);
  //             });
  //           }
  //       }
  // }
  // userLikes() {
  //   this.newsService.getArticleById(this.lastArticles['id'], this.UsernameOfArticle, this.lastArticles ).subscribe(article => {
  //     console.log(article);
  //   });
  // }
  ngOnInit() {
    this.newsService.fetchAllInformattion().subscribe(data => {
      this.news = data;
      // for (let key in this.news ) {
      //   this.UsernameOfArticle = this.news[key]['name']
        // console.log(this.UsernameOfArticle);
        // this.allArticles = this.news[key]['articles']
        // this.lastArticles = this.allArticles[this.allArticles.length - 1];
          // console.log(this.lastArticles);
      // }
    });
  }
}
