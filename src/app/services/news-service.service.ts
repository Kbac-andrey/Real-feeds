import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsService {
  constructor( private http: HttpClient) {}

  fetchNews() {
    return this.http.get('http://localhost:3000/users');
  }

}
