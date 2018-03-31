import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';

import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import {Product} from "../product-list/product";
import{User} from "../login/user"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  list:Product[]=[];
  user:User;
  constructor(private cartService:CartService,
              private ordersService:OrdersService,
              private router:Router) { }
  ngOnInit() {
    this.cartService.getUser().subscribe(User=> {//get user's information
      this.user = User.user;
    },
      err=> {
        console.log(err);
        return false;
      });

  }

  deleteitem(item){//delete this item permanently in mongodb
  this.cartService.deleteItem(item.name,this.user).subscribe((data=>{
  }));
    window.location.reload(true)//reload this page,meanwhile the array of cartcontent will be reload
  }
  total=0;
  totalitem=0;
  temp=0;
  changestatus(item,i){//calculate the totalitems and total price when checkboxes are selected or cancelled
    if(i.checked){
      this.temp=item.Qty;
      this.totalitem=(this.totalitem)+parseInt(item.Qty);
      this.total=(this.total)+(parseInt(item.price)*item.Qty);
      this.list.push(item);//add an item to list,record which item was being selected(Could be using in "buy" part after checkout
      console.log(this.list);
      this.addOrders(item);
      // console.log(this.Products.length)
    }
    if(!i.checked){//check if the item is cancelled
      this.totalitem=(this.totalitem)-(this.temp);
      this.total=(this.total)-(parseInt(item.price)*(this.temp));
      // this.deleteOrder(item);
    }

  }

  addOrders(product){
    this.ordersService.addOrders(product.name,this.user).subscribe(data => {
    });
  }



}
