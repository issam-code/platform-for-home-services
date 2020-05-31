import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
post;
  constructor(public service:DataService) { }

  ngOnInit() {
    this.post = this.service.post;
    console.log(this.service.post);
  }

}
