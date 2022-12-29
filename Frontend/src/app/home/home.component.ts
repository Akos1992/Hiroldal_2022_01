import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../model/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsList!: Observable<News[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.newsList = this.httpClient.get<News[]>("/news")
  }

}
