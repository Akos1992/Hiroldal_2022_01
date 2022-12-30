import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../model/news';
import { CategoriesService } from '../service/categories.service';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  model: News;
  categories = this.categoriesService.getCategories();
  submitted = false;

  constructor(private route: ActivatedRoute, private newsService: NewsService, private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getNewsDetail();
  }

  getNewsDetail() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.newsService.getNewsById(id).subscribe(response => {
      this.model = response
    });
  }

  onSubmit() { 
    this.submitted = true; this.newsService.editNews(this.model);
  }
}
