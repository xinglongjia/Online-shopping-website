import { CheckoutComponent } from './components/checkout/checkout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import {ValidateService} from "./services/validate.service";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import { ProfileComponent } from './components/profile/profile.component';
import {AuthGuard} from "./guard/auth.guard";
import { ProductListComponent } from './components/product-list/product-list.component';
import {SearchFilterPipe} from "./components/search-filter/search-filter.pipe";
import {DataService} from "./services/data.service";
import { SearchComponent } from './components/search/search.component';
import {CartComponent} from "./components/cart/cart.component";
import {CartService} from "./services/cart.service";
import {QtyComponent} from "./components/cart/addordec";
import {FlashMessagesService} from "angular2-flash-messages";
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import {ProductsService} from "./services/products.service";
import {BookmarkComponent} from "./components/bookmark/bookmark.component";
import {BookmarkService} from "./services/bookmark.service";
import {WeatherService} from "./services/weather.service";
import { LocationComponent } from './components/location/location.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrdersService } from './services/orders.service';
import { OrdersComponent } from './components/orders/orders.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    ProductListComponent,
    SearchFilterPipe,
    SearchComponent,
    CartComponent,
    QtyComponent,
    ProductdetailComponent,
    BookmarkComponent,
    CheckoutComponent,
    LocationComponent,
    ContactComponent,
    OrdersComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'navbar', component: NavbarComponent},
      {path: 'login', component: LoginComponent},
      {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
      {path:'register',component:RegisterComponent},
      {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
      {path:'productList',component:ProductListComponent},
      {path:'search',component:SearchComponent},
      {path:'cart',component:CartComponent},
      {path: 'detail/:_id', component: ProductdetailComponent},
      {path:'bookmark',component:BookmarkComponent},
      {path:'checkout',component:CheckoutComponent},
      {path:'contact',component:ContactComponent},
      {path:'orders',component:OrdersComponent},
      {path:'location',component:LocationComponent}
    ]),
    FlashMessagesModule
  ],
  providers: [ValidateService,AuthGuard,AuthService,DataService,
              CartService,FlashMessagesService,ProductsService,
              BookmarkService,WeatherService,OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
