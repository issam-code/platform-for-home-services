import { Component, OnInit } from '@angular/core';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth'
import {AngularFireDatabase} from 'angularfire2/database'
import { NavController, NavParams } from '@ionic/angular';
import { user } from '../modules/user';
import { Profil } from '../modules/profil';
import { take } from 'rxjs/operators';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {
  user={} as user;
  profil={} as Profil;
  selectdate:string="";
  constructor(private ofAuth:AngularFireAuth,
    public navCtrl: NavController,private afdatabase:AngularFireDatabase
    ,private datePicker: DatePicker,private datePipe: DatePipe,public platform:Platform) {
      this.platform.ready().then(()=>{
        this.selectdate=this.datePipe.transform(new Date(),"dd-MM-yyyy");
      }
      
      )
     }

  ngOnInit() {
  };
  SelectDate(){
    var options={
      date:new Date(),
      mode:'date',
      androidTheme:this.datePicker.ANDROID_THEMES.THEME_TRADITIONAL

    }
    this.datePicker.show(options).then((date)=>{
      this.selectdate=this.datePipe.transform(date,"dd-MM-yyyy");
    })
  }
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
    this.navCtrl.navigateForward('home');
    
  })
}


}
