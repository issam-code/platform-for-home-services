import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Comment } from '../modules/comment';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {Info} from '../modules/info'
import { first } from 'rxjs/operators';
import { Profil } from '../modules/profil';
@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
post;
info ={} as Info;
profil ={} as Profil;
public cmnt:Observable<Comment[]>;
itemsRef: AngularFireList<any>;
  constructor(public service:DataService,public route:Router,
    private afDB:AngularFireDatabase) { }

  async ngOnInit() {
    this.post = this.service.post;
    this.itemsRef =  this.afDB.list('comment/prod_'+this.post.product)
    this.cmnt = this.itemsRef.valueChanges() ;
    this.profil=await this.getdata()
  }
  gochat(item:any){
    this.info.image=item.image;
    this.info.userid=item.userId;
    this.info.username=item.username;
    var a=this.afDB.list('info/'+this.service.getData()).push(this.info)
    var a=this.afDB.list('info/'+item.userId).push(this.profil)
    if(a){console.log("success");}
  }
  async getdata(): Promise<any> {
    const pr = await this.afDB.object("profile/"+this.service.getData())
      .valueChanges().pipe(first()).toPromise();
    return pr;
  }
}
