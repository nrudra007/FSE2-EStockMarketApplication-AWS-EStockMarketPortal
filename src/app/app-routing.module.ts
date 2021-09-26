import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaincomponentComponent} from './maincomponent/maincomponent.component'
import {RegisterComponent} from './register/register.component'
import {SuccessComponent} from './success/success.component'
import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {AllcompComponent} from './allcomp/allcomp.component'
import { AdvSearchComponent } from './adv-search/adv-search.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"main",component:MaincomponentComponent, canActivate: [CanActivateRouteGuard]},
  {path:"add",component:RegisterComponent, canActivate: [CanActivateRouteGuard]},
  {path:"success",component:SuccessComponent, canActivate: [CanActivateRouteGuard]},
  {path:"login",component:LoginComponent},
  {path:"home", component:HomeComponent, canActivate: [CanActivateRouteGuard]},
  {path:"all",component:AllcompComponent, canActivate: [CanActivateRouteGuard]},
  {path:"advance", component:AdvSearchComponent, canActivate: [CanActivateRouteGuard]},
  {path:"basic",component:BasicSearchComponent, canActivate: [CanActivateRouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
