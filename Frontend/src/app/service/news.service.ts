import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getNews(katID?: number):Observable<News[]> {
    let news: Observable<News[]>;
    
    if (katID) 
      news = this.httpClient.get<News[]>("news/categories/" + katID);
    else 
      news = this.httpClient.get<News[]>("/news");
  
    return news;
  }
}
