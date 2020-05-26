import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { ToastController } from '@ionic/angular';
import { MessageBundle } from '@angular/compiler';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Profil } from '../modules/profil';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(public afAuth : AngularFireAuth ,
    private afDatabase:AngularFireDatabase,) { 
     
    }

  ngOnInit() {}

  

  
   
  

}
