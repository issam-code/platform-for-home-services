import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { NavController, NavParams } from '@ionic/angular';
import { user } from '../modules/user';
import {AngularFireDatabase} from 'angularfire2/database'
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={} as user;
  public id_user:any;
  
  constructor(public dataservice: DataService,
     public afAuth : AngularFireAuth,
     private afdatabase:AngularFireDatabase,public data:DataService,
    public navCtrl: NavController) {}

  ngOnInit() {
  }
  async login(user: user){
    
    try{
          const res = await this.afAuth.auth.signInWithEmailAndPassword(user.mail,user.password)
          if(res){
            
            this.navCtrl.navigateForward('phm');
            
          }
        }catch(err){
          console.dir("login failed");
    }
   
  }
 
 
 
}
