import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ProductsService} from "../../services/products.service";
import {Product} from "../product-list/product";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {Location}from '@angular/common'
import {BookmarkService} from "../../services/bookmark.service";
import { OrdersService } from '../../services/orders.service';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements  OnInit{
  product:Product=new Product;
  id:String;
  url:String;
  user:Object;
  constructor(private productsService:ProductsService,
              private route:ActivatedRoute,
              private flashMessageService: FlashMessagesService,
              private authService:AuthService,
              private router: Router,
              private cartService:CartService,
              private location:Location,
              private ordersService:OrdersService,
              private bookmarkService:BookmarkService) {
  }

  ngOnInit(){
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productsService.getProduct(params.get('_id')))//get product data by calling getproduct method in productservice
      .subscribe(product => this.product = product);
    this.authService.getProfile().subscribe(profile =>{
      this.user=profile.user;
    });
    this.url=this.location.path();
  }

  OnClickaddtocart(product:Product){//call the Addtocart method in service.After that,reload this page.
    this.cartService.Addtocart(product.name,this.user).subscribe(data => {
    });
    window.location.reload(true)
  }


  OnClickaddtobookmark(product:Product){//add items to bookmark in mongodb by Addtobookmark method in bookmarkservice
    this.bookmarkService.Addtobookmark(product.name,this.user).subscribe(data => {
    });
    window.location.reload(true)

}



}
