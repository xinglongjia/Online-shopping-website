import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class WeatherService {

  constructor(private http:Http) { }

  getWeather(){
    let headers=new Headers();
    headers.append('Content-Ytpe','application/json');
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Boston,us&appid=3b4d89fcc4bf18715893ef6cebd3817a').map(res => res.json());
  }

}
