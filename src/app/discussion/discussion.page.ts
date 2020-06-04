import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DataService } from '../data.service';
import { Message } from '../modules/Message';
import { Observable } from 'rxjs';
import { Info } from '../modules/info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})
export class DiscussionPage implements OnInit {
  public info:Observable<Info[]>;
  itemsRef: AngularFireList<any>;

  constructor(public db:AngularFireDatabase,public route:Router,
    public dataservice:DataService) { }

  ngOnInit() {
    this.itemsRef =  this.db.list('info/'+this.dataservice.getData() , ref => ref.orderByChild('date'))
    this.info = this.itemsRef.valueChanges() ;
  }
  gotochat(item:any){
    this.dataservice.info=item;
    this.dataservice.userid=item.userid;
    this.route.navigate(['/conversation']);
  }

}
