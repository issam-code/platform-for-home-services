import { Component, OnInit } from '@angular/core';
import { Post } from '../modules/post';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-poster',
  templateUrl: './poster.page.html',
  styleUrls: ['./poster.page.scss'],
})
export class PosterPage implements OnInit {
  image :SafeResourceUrl;
  post={} as Post;
  constructor(private ofAuth:AngularFireAuth,private afdatabase:AngularFireDatabase
    ,public navCtrl: NavController,private domsan:DomSanitizer) { }

  ngOnInit() {
  }
  createPost(){
    this.ofAuth.authState.take(1).subscribe(auth =>{
      this.post.userid=auth.uid;
      this.afdatabase.list(`post/`).push(this.post)
      .then(()=> console.log("post success"));
      this.navCtrl.navigateRoot('/home');
    })
  }
async takePhoto() {
  const {camera} = Plugins;
  const result = await camera.getPhoto ({
    quality: 75,
    allowEditing:true,
    source:CameraSource.Camera,
    resultType:CameraResultType.Base64,
    
  });
  this.image=this.domsan.bypassSecurityTrustResourceUrl(result && result.base64data);
}
}
