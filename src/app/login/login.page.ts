import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { NavController, NavParams } from '@ionic/angular';
import { user } from '../modules/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={} as user;
  
  constructor(public afAuth : AngularFireAuth,
    public navCtrl: NavController) {}

  ngOnInit() {
  }
  async login(user: user){
    
    try{
          const res = await this.afAuth.auth.signInWithEmailAndPassword(user.mail,user.password)
          if(res){
            this.navCtrl.navigateForward('home');
          }
        }catch(err){
          console.dir("login failed");
    }
  }
 
 
}
