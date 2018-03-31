import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {DataService} from "../../services/data.service";
import {CartService} from "../../services/cart.service";
import {Product} from "../product-list/product";
import {User} from "../login/user";
import {WeatherService} from "../../services/weather.service";
import {BookmarkService} from "../../services/bookmark.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  search:any;
  user:User;
  data:any;
  icon:String;
  temperature:String;
  description:String;

  itemsincart:Product[];
  itemsinbookmark:Product[];

  constructor(private authService:AuthService,
              private router: Router,
              private flashMessagesService:FlashMessagesService,
              private  dataService:DataService,
              private cartService:CartService,
              private weatherService:WeatherService,
              private bookmarkService:BookmarkService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile =>{//get client's information by getProfile method in authservice
      this.user=profile.user;

      this.cartService.getCartList(this.user.username).subscribe(res=>this.itemsincart=res);//get data from mongodb
      this.bookmarkService.getBookmarkList(this.user.username).subscribe(res=>this.itemsinbookmark=res);//get data from mongodb
    });
    this.weatherService.getWeather().subscribe(res=> {//using weather service to show weather information
      this.data=res;
      this.icon="https://openweathermap.org/img/w/"+this.data.weather[0].icon+".png";
      this.temperature=Math.round(this.data.main.temp-273.15)+"℃";
      this.description=this.data.weather[0].main;
    });
  }

  doSearch(){
    this.dataService.changeMessage(this.search);
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show('You are logged out',{
      cssClass:'alert-success',timeout:3000
    });
    this.router.navigate(['/login'])
  }

}
