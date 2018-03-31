import { Component, EventEmitter, Input, Output } from '@angular/core';
import {del} from "selenium-webdriver/http";

@Component({
  selector: 'Qty-add-dec',
  template: `
  <div>
    <button (click)="add()" title="bigger">+</button>
    <button (click)="dec()" title="smaller">-</button>
    <label>Qty: {{Qty}}</label>
    <label>price: {{allPrice}}</label>
  </div>`
})
export class QtyComponent {
  @Input()  Price:number|number;
  @Input()  Qty: number | string;
  @Output() QtyChange = new EventEmitter<number>();
  @Input() allPrice:number|number;
  add() { this.addordec(+1); }
  dec() { this.addordec(-1); }

  addordec(delta: number) {

    this.Qty =Math.max(1,+this.Qty+delta);
    this.QtyChange.emit(this.Qty);
   this.PriceChange(this.Qty)
  }
  PriceChange(delta:number){

    this.allPrice=Math.max(0,+(this.Price)*delta);
  }
}
