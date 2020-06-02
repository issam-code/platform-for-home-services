import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-phm',
  templateUrl: './phm.page.html',
  styleUrls: ['./phm.page.scss'],
})
export class PhmPage implements OnInit {

  constructor(public dataservice: DataService ,public navCtrl: NavController,
    public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(auth =>{
      this.dataservice.setData(auth.uid);
      this.navCtrl.navigateForward('home');
    });
    
  }

}
