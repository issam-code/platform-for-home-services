import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Message } from '../modules/Message';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
post;
public msg:Observable<Message[]>;
itemsRef: AngularFireList<any>;
  constructor(public service:DataService,private afDB:AngularFireDatabase) { }

  ngOnInit() {
    this.post = this.service.post;
    console.log(this.service.post);
    this.itemsRef =  this.afDB.list('post/comment')
    this.msg = this.itemsRef.valueChanges() ;
  }

}
