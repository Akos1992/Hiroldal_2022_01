import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { News } from '../model/news';
import { CategoriesService } from '../service/categories.service';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsList!: Observable<News[]>;
  categoryList!: Observable<Category[]>;
  isLoggedIn: string | null;

  constructor(private newsService: NewsService, private categoriesService: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    this.newsList = this.newsService.getNewsByCategoryId();
    this.categoryList = this.categoriesService.getCategories();
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
  }

  categoryClick(katID?: number) {
    this.newsList = this.newsService.getNewsByCategoryId(katID);
  }

  openNews(id:number) {
    this.router.navigateByUrl("/content/" + id);
  }

  editClickHandler(id:number) {
    this.router.navigateByUrl("/news/" + id);
  }

  delete(id:number) {
    this.newsService.deleteNews(id);
    alert("Hír törölve!");
  }
}
