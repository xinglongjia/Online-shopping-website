import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class DataService{
  private message=new BehaviorSubject<any>("default message");
  currentMessage=this.message.asObservable();

  constructor(){};

  changeMessage(message:any){
    this.message.next(message);
  }
}



