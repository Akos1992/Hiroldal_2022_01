import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { News } from '../model/news';
import { CategoriesService } from '../service/categories.service';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList!: Observable<Category[]>;
  @Output() categoryClickEmitter = new EventEmitter<number>();

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryList = this.categoriesService.getCategories();
  }

  categoryClick(katID?: number) {
    this.categoryClickEmitter.emit(katID)
  }
}
