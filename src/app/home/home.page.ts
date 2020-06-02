import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { first } from 'rxjs/operators';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Profil } from '../modules/profil';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
profilee ={} as Profil;
  constructor(public dataservice: DataService ,private db: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
      }

 async ngOnInit() {
 
  this.afAuth.authState.subscribe(auth =>{
    this.dataservice.setData(auth.uid);
  });
  }
  async getdata(): Promise<any> {
    const pr = await this.db.object("profile/"+this.dataservice.getData())
      .valueChanges().pipe(first()).toPromise();
      console.log(pr);
    return pr;
  }

}
