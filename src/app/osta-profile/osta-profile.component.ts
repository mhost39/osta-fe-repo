import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-osta-profile',
  templateUrl: './osta-profile.component.html',
  styleUrls: ['./osta-profile.component.css']
})
export class OstaProfileComponent  {

  constructor(private user: UserService,private router : Router) { }
  submit(f){
    let user = localStorage.getItem('user');
    console.log(user)
     this.user.chOsta({"username" : user}).subscribe(
       data => {
       },
       error =>{
         console.log(error)
         
       }

     )
     this.router.navigate(['']);
  }


}
