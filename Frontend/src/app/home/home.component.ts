import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { News } from '../model/news';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsList!: Observable<News[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsList = this.newsService.getNews();
  }

  onCategoryClickEmitter(katID: number) {
    this.newsList = this.newsService.getNews(katID);
  }
}
