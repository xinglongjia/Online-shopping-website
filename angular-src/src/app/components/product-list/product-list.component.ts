import { Component, OnInit, EventEmitter } from '@angular/core';
import {Product} from "./product";
import {ProductsService} from "../../services/products.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductsService]
})
export class ProductListComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;
  products:Product[];
  user:Object;


  constructor(private flashMessageService: FlashMessagesService,private productsService:ProductsService,private authService:AuthService,private router: Router,private cartService:CartService) { }

  ngOnInit() {
    this.productsService.getProductList().subscribe(res=>this.products=res);
    this.authService.getProfile().subscribe(profile =>{
      this.user=profile.user;
    });
  }
  OnClickaddtocart(product:Product){//call the Addtocart method in service.After that,reload this page.

    this.cartService.Addtocart(product.name,this.user).subscribe(data => {

      if(data.success){
        this.flashMessageService.show('Added successfully!',{cssClass:'alert-success',timeout:3000});
      }
      else{
        this.flashMessageService.show('Something unexpected happened.',{cssClass:'alert-danger',timeout:3000});
      }
      this.router.navigate(['/productList']);
    });
    window.location.reload(true)
  }





}
