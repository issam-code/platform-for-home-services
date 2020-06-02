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
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {
  images:any=[];
  user={} as user;
  profil={} as Profil;
  selectdate:string="";
  constructor(private ofAuth:AngularFireAuth,
    public navCtrl: NavController,private afdatabase:AngularFireDatabase
    ,public imagepk:ImagePicker,private datePicker: DatePicker,private datePipe: DatePipe,public platform:Platform) {
      this.platform.ready().then(()=>{
        this.selectdate=this.datePipe.transform(new Date(),"dd-MM-yyyy");
      }
      
      )
     }

  ngOnInit() {
  };
 
  async register(user: user) {
    try{
    const result = await this.ofAuth.auth.createUserWithEmailAndPassword(user.mail,user.password)
    if(result){
      this.profil.mail=this.user.mail;
      this.createProfil()
    }
}catch(err){
                   console.log("erreur de registre");
}
}
createProfil(){
  this.ofAuth.authState.take(1).subscribe(auth =>{
    this.profil.image="";
    this.afdatabase.object(`profile/${auth.uid}`).set(this.profil)
    .then(()=> console.log("registre success"));
    this.navCtrl.navigateForward('login');
    
  })
}
pickmultipleimg(){
  var option:ImagePickerOptions={
maximumImagesCount:5,
width:100,
height:100

  }
  this.imagepk.getPictures(option).then((result)=>{
   
      let filename=result.substring(result.
        lastIndexOf('/')+1);
        let path=result.substring(0,result.
          lastIndexOf('/')+1)
      /*  this.file.readAsDataURL(path,filename).then((base64string)=>{
          this.images.push(base64string);
        })*/
    
  }
  )
}


}
