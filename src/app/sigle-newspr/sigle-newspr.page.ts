import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-sigle-newspr',
  templateUrl: './sigle-newspr.page.html',
  styleUrls: ['./sigle-newspr.page.scss'],
})
export class SigleNewsprPage implements OnInit {
  messageText: any;
  post;
  uderid:any=this.dataservice.getData();
  public messages: any = [];
  constructor(public service:DataService
    ,private afDB: AngularFireDatabase,public dataservice:DataService) { }

  ngOnInit() {
    this.post = this.service.post;
    console.log(this.service.post);
  }
  sendMessage() {
    this.afDB.list('post/message').push({
      userId:this.uderid ,
      text: this.messageText,
      date: new Date().toISOString()
    });
    this.messageText = '';
  }
  getMessages() {
    this.afDB.list('post/message', ref => ref.orderByChild('date')).snapshotChanges(['child_added'])
    .subscribe(actions => {
      this.messages = [];
      actions.forEach(action => {
        this.messages.push({
          userId: action.payload.exportVal().userId,
          text: action.payload.exportVal().text,
          date: action.payload.exportVal().date
        });
        console.log(this.messages);
      });
    });
  }


}
