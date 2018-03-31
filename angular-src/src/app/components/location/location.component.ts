import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  img:any;
  constructor() { }

  ngOnInit() {//use google API map service to display location of user
    navigator.geolocation.getCurrentPosition(position=>{
      let latitude  = position.coords.latitude;
      let longitude = position.coords.longitude;
      alert('Latitude is ' + latitude + '°. Longitude is ' + longitude + '°');
      this.img = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=17&size=300x300&sensor=false&key=AIzaSyA2y421odOiE_H9W5kIvA5lHBgM2-KgL6I";
  });
  }

}
