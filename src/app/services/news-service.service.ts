import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class NewsService {
  constructor( private http: HttpClient) {}

  fetchAllInformattion() {
    return this.http.get('http://localhost:3000/users');
  }
}
