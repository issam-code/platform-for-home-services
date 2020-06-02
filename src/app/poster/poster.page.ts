import { Component, OnInit } from '@angular/core';
import { Post } from '../modules/post';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx'
@Component({
  selector: 'app-poster',
  templateUrl: './poster.page.html',
  styleUrls: ['./poster.page.scss'],
})
export class PosterPage implements OnInit {
  images:any=[];
  image :SafeResourceUrl;
  post={} as Post;
  constructor(private ofAuth:AngularFireAuth,private afdatabase:AngularFireDatabase
    ,public navCtrl: NavController,private domsan:DomSanitizer,
    public imagepk:ImagePicker) { }

  ngOnInit() {
  }
  createPost(){
    this.ofAuth.authState.take(1).subscribe(auth =>{
      this.post.image="";
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
