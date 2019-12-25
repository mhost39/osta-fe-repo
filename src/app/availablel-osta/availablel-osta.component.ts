import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-availablel-osta',
  templateUrl: './availablel-osta.component.html',
  styleUrls: ['./availablel-osta.component.css']
})
export class AvailablelOstaComponent implements OnInit {
  service : string ;
  avialableOsta ;
  arr = ["سباكه","نجارة","كهرباء","أجهزة كهربائية","تشطيبات وديكورات","نقاشة","ألوميتال","حدادة","مبلط","تكييف وتبريد","تركيب ستالايت وكاميرات"]
  constructor(private rout : ActivatedRoute , private user : UserService) { }

  ngOnInit() {
    this.rout.paramMap
    .subscribe(params => {
      this.service = params.get('selected');
    })
    this.user.getCustomersList(this.service)
      .subscribe( result => {
        this.avialableOsta = result;
        console.log(result);
      } ,
      errors =>{
        console.log(errors)
      })

  }


}
