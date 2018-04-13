import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NewsService } from '../services/news-service.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public news: object;
  constructor( private http: HttpClient, private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.fetchNews().subscribe(
      data => this.news = data
    );
  }

}
