import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(private authService:AuthService,
              private router: Router,
              private flashMessagesService:FlashMessagesService) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username:this.username,
      password:this.password
    };
    this.authService.authenticateUser(user).subscribe(data=>{//using authentication to check if the client is valid
      if(data.success){
      this.authService.storeUserData(data.token,data.user);
      this.flashMessagesService.show('Logged in successfully!',{cssClass:'alert-success',timeout:6000});//show flash message
        this.router.navigate(['/dashboard']);
      }
      else{
        this.flashMessagesService.show(data.msg,{cssClass:'alert-danger',timeout:6000});
        this.router.navigate(['/login']);
      }
    });
  }

}
