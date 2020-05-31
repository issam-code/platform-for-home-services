import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-homepr',
  templateUrl: './homepr.page.html',
  styleUrls: ['./homepr.page.scss'],
})
export class HomeprPage implements OnInit {
home:string="";
  constructor(public dataservice: DataService ,public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.dataservice.setData(auth.uid);
    });
}
}
