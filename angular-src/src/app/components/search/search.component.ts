import { Product } from './../product-list/product';
import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {DataService} from "../../services/data.service";

import { Pipe } from "@angular/core";



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[ProductsService]
  
})

export class SearchComponent implements OnInit {
  search:any;
  products:Product[]=[];
  result:Product[]=[];
  selectedProduct:Product;
  


  constructor(private productsService:ProductsService,private  dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(mes=>{
      this.search=mes
    })
    this.productsService.getProductList().subscribe(res=>this.products=res);
    
  }

  load(i:Product){
    this.result.push(i);
  }
 

  sortType(sort:string){
    
    if(sort==='name'){
      this.result.sort(this.sortByName);
      
    }
    if(sort==='pricel2h'){
      this.result.sort(this.sortByPrice1)
      
    }
    if(sort==='priceh2l'){
      this.result.sort(this.sortByPrice2)
    }
    if(sort==='rating'){
      this.result.sort(this.sortByRating)
      
    }
  }

  sortByName(p1:Product,p2:Product){
    if(p1.name > p2.name)return 1
      else if(p1.name===p2.name)return 0
        else return -1
  }

  sortByPrice1(p1:Product,p2:Product){
    return parseFloat(p1.price)-parseFloat(p2.price);
  }

  sortByPrice2(p1:Product,p2:Product){
    return parseFloat(p2.price)-parseFloat(p1.price);
  }

  sortByRating(p1:Product,p2:Product){
    
    return parseFloat(p2.rating)-parseFloat(p1.rating);
  }

  onSelect(product){
    this.selectedProduct = product;
    this.result.push(this.selectedProduct);
  }

  clear(){
    this.result=[];
  }
}
