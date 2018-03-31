import { Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Product} from "../components/product-list/product";

@Injectable()
export class ProductsService{
  constructor(private http:Http,) { }

  getProductList(){
    let headers=new Headers();
    headers.append('Content-Ytpe','application/json');
    return this.http.get('http://localhost:3000/products').map(res => res.json());
  }

  getProducts(): Promise<Product[]> {
    let products:Product[];
    return this.http.get('http://localhost:3000/products').toPromise().then(res=>{
      return products=res.json();
    });
  }


  getProduct(_id:String){
    return this.getProducts().then(products => products.find(product => product._id === _id));
  }



}
