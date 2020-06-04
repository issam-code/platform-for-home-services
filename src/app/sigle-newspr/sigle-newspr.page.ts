import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Comment } from '../modules/comment';
import { AngularFireAuth } from 'angularfire2/auth';
import { first } from 'rxjs/operators';
import { Profil } from '../modules/profil';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sigle-newspr',
  templateUrl: './sigle-newspr.page.html',
  styleUrls: ['./sigle-newspr.page.scss'],
})
export class SigleNewsprPage implements OnInit {
  public cmnt:Observable<Comment[]>;
  itemsRef: AngularFireList<any>;
  post;
  public profil={} as Profil;
  comment={} as Comment;
  uderid:any=this.dataservice.getData();
  constructor(public service:DataService,private ofAuth:AngularFireAuth
    ,private afDB: AngularFireDatabase,
    public dataservice:DataService ,public router:Router) { }

  async ngOnInit() {
    this.post = this.service.post;
    console.log(this.service.post);
    this.itemsRef =  this.afDB.list('comment/prod_'+this.post.product)
    this.cmnt = this.itemsRef.valueChanges() ;
   this.profil=await this.getdata()
  }
  async getdata(): Promise<any> {
    const pr = await this.afDB.object("profile/"+this.dataservice.getData())
      .valueChanges().pipe(first()).toPromise();
      console.log(pr);
    return pr;
  }
  addcomment() {
    console.log(this.service.username)
    this.comment.username = this.profil.username;
    this.comment.userId=this.uderid;
    this.comment.image = this.profil.image;
    this.ofAuth.authState.take(1).subscribe(auth =>{
      this.post.userid=auth.uid;
      this.afDB.list('comment/prod_'+this.post.product).push(this.comment)
      .then();{
        this.comment.prix=''
        this.comment.text=''
      }
      
    })
    
  }
 


}
