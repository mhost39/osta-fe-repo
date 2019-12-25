import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser;
  currentOsta;
  constructor() { 
  }

  ngOnInit() {
  }
  checkuser(){
    this.currentUser = localStorage.getItem('user');
    if (this.currentUser){
    
      return true;
    }

    return false;
  }

  checkosta(){
    this.currentOsta = localStorage.getItem('osta');
    if (this.currentOsta){
        return true;
      }
   
    return false;
  }
  
  logout() { 
    localStorage.removeItem('user');
    localStorage.removeItem('osta');

    this.currentUser = null;
    this.currentOsta = null;

  }

}
