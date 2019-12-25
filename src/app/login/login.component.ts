import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private user: UserService , private router : Router) {

   }

   submit(f){
    let phone = f.value.phone;
    let pass = f.value.password;
     this.user.getUser({"username" : phone , "password" : pass}).subscribe(
       data => {
           if (data){
             localStorage.setItem('user' , data[0].username);
             if(data[0].user_type == false){
              localStorage.setItem('osta' , 'true');

             }
          
             
             this.router.navigate(['']);
           }
       },
       error =>{
         console.log(error)
         
       }

     )
  }

}
