import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../model/news';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  model: News;
  
  constructor(private route: ActivatedRoute, private newsService: NewsService){}

  ngOnInit(): void {
    this.getNewsDetail();
  }

  getNewsDetail() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.newsService.getNewsById(id).subscribe(response => {
      this.model = response
    });
  }
}
