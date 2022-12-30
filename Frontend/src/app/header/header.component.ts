import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
  }

  addNews() {
    this.router.navigateByUrl("/news/" + 0);
  }

  kijelentkezes() {
    localStorage.clear();
    this.router.navigate(['/bejelentkezes'])
  }
}
