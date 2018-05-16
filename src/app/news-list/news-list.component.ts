import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NewsService } from '../services/news-service.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public news: object;
   // public shownewarticle: boolean = false;
  public idUserWithCorrentArticle: number;
  public idCorrentArticle: number;
  public sortDate: string[] = [];
  public logInuser: string[] = [];
  subscription: Subscription;

  constructor( private http: HttpClient, private newsService: NewsService, private authService: AuthService, private router: Router) {
  }



  onLike(event) {
    this.logInuser = this.authService.findgetLoggedUser();
    if (this.logInuser.length === 0) {
      this.router.navigate(['/login']);
    } else {
      for (let key in this.news) {
        if (this.news[key]['id'] == event.idUserWithCorrentArticle) {
          let user = this.news[key]
          for (let i = 0; i < user['articles'].length; i++) {
            if (user['articles'][i]['idArticle'] == event.idCorrentArticle) {
              if (user['articles'][i]['userLikes'] !== this.logInuser[0]['id'] && user['articles'][i]['userLikes'].indexOf(this.logInuser[0]['id'])) {
                user['articles'][i]['userLikes'].push(this.logInuser[0]['id']);
              } else {
                let index = user['articles'][i]['userLikes'].indexOf(this.logInuser[0]['id']);
                user['articles'][i]['userLikes'].splice(index, 1);
              }
              // this.CountLikes = user['articles'][i]['userLikes'].length;
              this.authService.editRegestrationUser(user.id, user).subscribe(user => {
              });
            }
          }
        }
      }
    }
  }

  ngOnInit() {
    this.newsService.fetchAllInformattion().subscribe(data => {
      this.news = data;
      let unsortDate = []
      for (let key in this.news) {
        let user = this.news[key]
        let lastIndex = user['articles'].length -1;
        let lastArticle = user['articles'][lastIndex];
        // user['articles'][user['articles'].length -1]
        if (lastArticle !== undefined) {
          unsortDate.push(lastArticle);
          // console.log(unsortDate)
        }
      }
      this.sortDate = this.news.sort((a: any, b: any) => {
        let lastIndexA = a['articles'].length - 1;
        let lastIndexB = b['articles'].length - 1;
        let lastArticleA = a['articles'][lastIndexA];
        let lastArticleB = b['articles'][lastIndexB];
        return new Date(lastArticleA['dataforpost']).getTime() - new Date(lastArticleB['dataforpost']).getTime();
      });
      // this.sortDate = unsortDate.sort((a: any, b: any) =>
      //   new Date(b['dataforpost']).getTime() - new Date(a['dataforpost']).getTime())
      // console.log(new Date("Wed May 16 2018 17:26:43 GMT+0300 (FLE Daylight Time)").getTime())
      // console.log(unsortDate)
      // console.log(this.sortDate)
    });


  }
}
