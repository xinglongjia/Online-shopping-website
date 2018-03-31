import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;

  constructor(private validateService: ValidateService,private flashMessageService: FlashMessagesService,private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user={
      name:this.name,
      username:this.username,
      password:this.password,
      email:this.email
    }

    if(!this.validateService.validateRegister(user)){
      this.flashMessageService.show('Please fill in all fields.',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessageService.show('Please input an valid email address.',{cssClass:'alert-danger',timeout:3000});
      return false;
    }


    //注册
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessageService.show('Registered successfully!',{cssClass:'alert-success',timeout:3000});
        this.router.navigate(['/login']);
      }
      else{
        this.flashMessageService.show('Something unexpected happened.',{cssClass:'alert-danger',timeout:3000});
        this.router.navigate(['/register']);
      }
    })
  }




}
