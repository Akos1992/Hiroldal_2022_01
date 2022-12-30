import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getNewsById(id:number):Observable<News> {
    return this.httpClient.get<News>("/news/" + id);
  }

  getNewsByCategoryId(katID?: number):Observable<News[]> {
    let news: Observable<News[]>;
    
    if (katID) 
      news = this.httpClient.get<News[]>("news/categories/" + katID);
    else 
      news = this.httpClient.get<News[]>("/news");
  
    return news;
  }

  editNews(news: News) {
    this.httpClient.post("news/", news).subscribe(response=> {
      alert("Megszerkesztve!")
    })
  }

  deleteNews(id: number) {
    this.httpClient.delete("news/" + id).subscribe(response=> {
      alert("Törölve!")
    });
  }
}
