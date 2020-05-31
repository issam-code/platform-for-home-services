import { Component, OnInit } from '@angular/core';
import { Profil } from '../modules/profil';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataService } from '../data.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  public profilee={} as Profil;
  constructor(public navCtrl:NavController, 
    public dataservice: DataService ,private db: AngularFireDatabase,public afAuth : AngularFireAuth) {
  }

  async ngOnInit() {
    this.profilee = await this.getdata();
    console.log(this.profilee)
  }
  
  async getdata(): Promise<any> {
    const pr = await this.db.object("profile/"+this.dataservice.getData())
      .valueChanges().pipe(first()).toPromise();
      console.log(pr);
    return pr;
  }
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.navCtrl.navigateForward('login');
    })
  }
  
}