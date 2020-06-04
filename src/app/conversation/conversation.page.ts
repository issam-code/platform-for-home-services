import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DataService } from '../data.service';
import { first } from 'rxjs/operators';
import { Profil } from '../modules/profil';
import { Message } from '../modules/Message';
import { Observable } from 'rxjs';
import { Info } from '../modules/info';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
  public messages: any = [];
  userId=this.dataservice.getData();
profil={ } as Profil;
message={ } as Message;
info={} as Info;
text: any;
public msg:Observable<Message[]>;
itemsRef: AngularFireList<any>;
  constructor(public db:AngularFireDatabase,public dataservice:DataService) {
    
   }

  async ngOnInit() {
    this.info=this.dataservice.info;
    this.profil=await this.getdata();
    if(this.profil.profession=='Client'){
      this.itemsRef =  this.db.list('messages/'+this.dataservice.userid , ref => ref.orderByChild('date'))
    this.msg = this.itemsRef.valueChanges() ;
    }else{
      this.itemsRef =  this.db.list('messages/'+this.dataservice.getData() , ref => ref.orderByChild('date'))
    this.msg = this.itemsRef.valueChanges() ;
    }
  }
  async getdata(): Promise<any> {
    const pr = await this.db.object("profile/"+this.dataservice.getData())
      .valueChanges().pipe(first()).toPromise();
    return pr;
  }
  sendMessage() {
    this.message.userId=this.dataservice.getData();
    this.message.date=new Date().toISOString();
    if(this.profil.profession=='Client'){
      this.db.list('messages/'+this.dataservice.userid).push(this.message)
    .then();{this.message.text = ''}
    }else{
      this.db.list('messages/'+this.dataservice.getData()).push(this.message)
      .then();{this.message.text = ''}
    }
    
    
  }
}
