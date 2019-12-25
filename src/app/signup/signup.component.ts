import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../modules/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user : User;
  constructor(private userService: UserService , private router: Router) { }
  
  submit(f){
    this.user = new User();
    this.user.full_name = f.value.name;
    this.user.phone_number = f.value.phone;
    this.user.password = f.value.password;
    this.user.available_now = false;
    this.user.craft = f.value.servive;
    this.user.user_type = true;
    this.user.username = f.value.aboutServive;
    this.user.available_today = false;

    this.userService.createUser(this.user)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/login'])

      },
      error => console.log(error));
  }


 
}
