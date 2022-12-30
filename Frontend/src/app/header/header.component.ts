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

  isLoggedIn:string | null;

  constructor() {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
  }

  kijelentkezes() {
    localStorage.clear();
    this.isLoggedIn = null;
  }
}
