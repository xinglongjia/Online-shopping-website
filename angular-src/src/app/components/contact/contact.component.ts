import { Question } from './question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  question:Question;
  constructor() { }

  ngOnInit() {
  }

  goBack(){
    window.history.go(-1);
  }
}
