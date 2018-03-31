import { Component, OnInit } from '@angular/core';
import {BookmarkService} from "../../services/bookmark.service";
import{User} from "../login/user"

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  user:User;
  search:any;
  constructor(private bookmarkService:BookmarkService) { }

  ngOnInit() {
    this.bookmarkService.getUser().subscribe(User=> {//get user's information
        this.user = User.user;
      },
      err=> {
        console.log(err);
        return false;
      });

  }
  deletebookmark(item){//delete this item permanently in mongodb
    this.bookmarkService.deleteBookmark(item.name,this.user).subscribe((data=>{
    }));
    window.location.reload(true)
  }

  gotodetail(item){
    window.location.href = item.url;
  }


}
