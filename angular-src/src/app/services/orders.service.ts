import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class OrdersService {
  authToken:any;
  user:any;
  constructor(private  http: Http) { }
  getUser(){//use route "profile" to get user information
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Ytpe','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers:headers}).map(res => res.json());
  }
  loadToken(){
    const  token=localStorage.getItem('id_token');
    this.authToken=token;
  }

  addOrders(productName,user){//add an item to particular user's orders list
    let headers=new Headers();
    headers.append('Content-Ytpe','application/json');
    return this.http.put('http://localhost:3000/users/add-to-order/'+productName,user,{headers:headers}).map(res => res.json());
  }

  deleteOrder(name,user){//delete item in of particular user in mongodb.transfer data by url
    let headers=new Headers();
    headers.append('Content-Ytpe','application/json');
    return this.http.put('http://localhost:3000/orders/deleteorder/'+name,user,{headers:headers}).map(res=>res.json());
  }

  getOrders(name){//load orders from mongodb
    let headers=new Headers();
    headers.append('Content-Ytpe','application/json');
    return this.http.get('http://localhost:3000/users/add-to-order/'+name,{headers:headers}).map(res => res.json());
  }
}
