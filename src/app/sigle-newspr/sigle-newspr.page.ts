import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Message } from '../modules/Message';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-sigle-newspr',
  templateUrl: './sigle-newspr.page.html',
  styleUrls: ['./sigle-newspr.page.scss'],
})
export class SigleNewsprPage implements OnInit {
  public msg:Observable<Message[]>;
  itemsRef: AngularFireList<any>;
  post;
  message={} as Message;
  uderid:any=this.dataservice.getData();
  constructor(public service:DataService,private ofAuth:AngularFireAuth
    ,private afDB: AngularFireDatabase,public dataservice:DataService) { }

  ngOnInit() {
    this.post = this.service.post;
    console.log(this.service.post);
    this.itemsRef =  this.afDB.list('post/comment')
    this.msg = this.itemsRef.valueChanges() ;
    console.log(this.post.id)
  }
  addcomment() {
    this.message.date=new Date().toISOString();
    this.message.userId=this.uderid;
    this.ofAuth.authState.take(1).subscribe(auth =>{
      this.post.userid=auth.uid;
      this.afDB.list('post/comment').push(this.message)
      
    })
    
  }
 


}
