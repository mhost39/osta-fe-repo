import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Customer } from './services/customer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  customer: Customer = new Customer();

  constructor(){

    
  }



}
