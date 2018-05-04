import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
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

  @Input() userId: number;
  @Input() userArticleId: number;
  @Output() like: EventEmitter<any> = new EventEmitter();

  constructor( private http: HttpClient, private newsService: NewsService, private authService: AuthService, private router: Router) { }

  toggleFavorite() {
    this.like.emit({idUserWithCorrentArticle: this.userId, idCorrentArticle: this.userArticleId})
  }

  ngOnInit() {

  }

}
