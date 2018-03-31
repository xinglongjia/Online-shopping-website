import { User } from './../login/user';
import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  user:User;

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.ordersService.getUser().subscribe(User=>{
      this.user=User.user;
    },
    err=>{
      console.log(err);
      return false;
    });
  }

}
