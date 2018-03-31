import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  customer= new Customer();


  constructor(
    private router:Router,
    private flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){//form onsubmit event
    this.flashMessagesService.show('Your order is placed ! Thank you to choose Big Hammer !',{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['']);
  }




}
