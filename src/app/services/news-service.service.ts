import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class NewsService {
  constructor( private http: HttpClient) {}

  fetchAllInformattion() {
    return this.http.get('http://localhost:3000/users');
  }
  // getArticleById(articleId) {
  //   return this.http.get('http://localhost:3000/users/' + articleId);
  // }
  getArticleById(articleId, userName, articleTitle): any {
    return this.http.get(`http://localhost:3000/users?name=${userName}&idTitle=?${articleId}&title=${articleTitle}`);
  }
  // favorite(userId) {
  //   return this.http.get('http://localhost:3000/users/' + userId);
  // GET /posts?_embed=comments
  // GET /posts/1?_embed=comments
  //   http://localhost:3000/users?idTitle=0&title=sequi-sit-molestiae
  //   http://localhost:3000/users?name=Pattie&idTitle=0&title=qui-saepe-vitae
  // }
}
