import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'
import { NavController, NavParams } from '@ionic/angular';
import { user } from '../modules/user';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {
  user={} as user;
  constructor(private ofAuth:AngularFireAuth,
    public navCtrl: NavController) { }

  ngOnInit() {
  };
  async register(user: user) {
    try{
    const result = await this.ofAuth.auth.createUserWithEmailAndPassword(user.mail,user.password)
     console.log(result)
       }catch(err){
                   console.log("erreur de registre");
                 }
                 }

}
