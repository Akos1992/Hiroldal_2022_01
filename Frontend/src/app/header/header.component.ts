import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList!: Observable<Category[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.categoryList = this.httpClient.get<Category[]>("/news/categories");
  }

}
