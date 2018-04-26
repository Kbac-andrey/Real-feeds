import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
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
  logInuser: string[] = [];
  public StatusMessage: boolean = true;
  // @Input() article: Article;
  @Output() onToggle = new EventEmitter<boolean>();
  constructor( private http: HttpClient, private newsService: NewsService, public authService: AuthService, private router: Router) { }
  toggleFavorite() {
    this.logInuser = this.authService.findgetLoggedUser();
      console.log(this.logInuser);
      if (this.logInuser.length === 0) {
        this.router.navigate(['/login']);
      }
  }




  ngOnInit() {
    this.newsService.fetchNews().subscribe(
      data => this.news = data
    );
  }

}
