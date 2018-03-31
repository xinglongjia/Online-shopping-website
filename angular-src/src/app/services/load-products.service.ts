import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {map} from "rxjs/operators";
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class LoadProductsService {

  constructor(private  http: Http) { }
  

}
