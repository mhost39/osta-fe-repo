import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConactUsComponent } from './conact-us/conact-us.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { BeOstaComponent } from './be-osta/be-osta.component';
import { OrderComponent } from './order/order.component';
import { AvailablelOstaComponent } from './availablel-osta/availablel-osta.component';
import { OstaProfileComponent } from './osta-profile/osta-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConactUsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BeOstaComponent,
    OrderComponent,
    AvailablelOstaComponent,
    OstaProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
