import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public afDB: AngularFireDatabase
  constructor( ) {}

  ngOnInit() {
  }
  add() {
    this.afDB.list('User').push({
      pseudo: 'drissas'
    });
  }
 
}
