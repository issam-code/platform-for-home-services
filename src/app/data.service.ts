import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private data:any;
public post:any;
public username:any;
public userid:any;
public id:any;
public info:any;
  constructor() { }
  setData(data){
    this.data=  data;
  }
  getData(){
    return this.data;
  }
}
