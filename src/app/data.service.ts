import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private data:any;
public post:any;
private 
  constructor() { }
  setData(data){
    this.data=  data;
  }
  getData(){
    return this.data;
  }
}
