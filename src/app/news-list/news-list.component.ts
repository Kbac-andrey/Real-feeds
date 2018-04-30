import { Component, EventEmitter, OnInit } from '@angular/core';
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
  public lastArticles: object;
  public lallArticles: Array<any>[];
  // public userId: number;
  logInuser: string[] = [];
  // CountLikes: number = 0;
  // @Output() onToggle = new EventEmitter<boolean>();


  constructor( private http: HttpClient, private newsService: NewsService, public authService: AuthService, private router: Router) {
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

  ngOnInit() {
    this.newsService.fetchAllInformattion().subscribe(data => {
      this.news = data
      for (let key in this.news ) {
        this.lallArticles = this.news[key]['articles']
        this.lastArticles = this.lallArticles[this.lallArticles.length - 1];
          console.log(this.lastArticles);
      }
    });
    // this.newsService.getUserById(this.userId).subscribe(user => {
    //   this.user = user;
    //   this.checkUserstatus();
    // });
  }
}
