import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../modules/user';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-be-osta',
  templateUrl: './be-osta.component.html',
  styleUrls: ['./be-osta.component.css']
})
export class BeOstaComponent {

  osta : User;
  constructor(private userservice: UserService ,private router : Router ) {}

    
  submit(f){
    this.osta = new User();
    this.osta.full_name = f.value.name;
    this.osta.phone_number = f.value.phone;
    this.osta.password = f.value.password;
    this.osta.available_now = true;
    this.osta.craft = f.value.servive;
    this.osta.user_type = true;
    this.osta.username = f.value.aboutServive;
    this.osta.available_today = true;

    this.userservice.createOsta(this.osta)
      .subscribe(
        data =>{
          this.router.navigate(['/login'])
  
        },
        error => {
          console.log(error);
        }
        
      )

  }
}

