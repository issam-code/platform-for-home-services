import { Component, OnInit } from '@angular/core';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth'
import {AngularFireDatabase} from 'angularfire2/database'
import { NavController, NavParams } from '@ionic/angular';
import { user } from '../modules/user';
import { Profil } from '../modules/profil';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {
  user={} as user;
  profil={} as Profil;
  constructor(private ofAuth:AngularFireAuth,
    public navCtrl: NavController,private afdatabase:AngularFireDatabase) { }

  ngOnInit() {
  };
  async register(user: user) {
    try{
    const result = await this.ofAuth.auth.createUserWithEmailAndPassword(user.mail,user.password)
    if(result){
      this.createProfil()
    }
}catch(err){
                   console.log("erreur de registre");
}
}
createProfil(){
  this.ofAuth.authState.take(1).subscribe(auth =>{
   
    this.afdatabase.object(`profile/${auth.uid}`).set(this.profil)
    .then(()=> console.log("registre success"));
    this.navCtrl.navigateRoot('/login');
  })
}


}
