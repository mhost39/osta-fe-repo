import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BeOstaComponent } from './be-osta/be-osta.component';
import { ConactUsComponent } from './conact-us/conact-us.component';
import { OrderComponent } from './order/order.component';
import { AvailablelOstaComponent } from './availablel-osta/availablel-osta.component';
import { OstaProfileComponent } from './osta-profile/osta-profile.component';


const routes: Routes = [
  {path: '' , component : HomeComponent} ,
  {path:'login' , component : LoginComponent},
  {path:'signup' , component : SignupComponent },
  {path:'beosta' , component: BeOstaComponent},
  {path:'contactUs' , component: ConactUsComponent},
  {path: 'order' , component : OrderComponent},
  {path: 'availble/:selected' , component : AvailablelOstaComponent}, 

  {path: 'ostaProfile' , component : OstaProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
