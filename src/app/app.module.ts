import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { RegisterComponent } from './register/register.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { NavbarComponent } from './navbar/navbar.component';
import { AllcompComponent } from './allcomp/allcomp.component';
import { AdvSearchComponent } from './adv-search/adv-search.component';
import { BasicSearchComponent } from './basic-search/basic-search.component'
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MaincomponentComponent,
    RegisterComponent,
    SuccessComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AllcompComponent,
    AdvSearchComponent,
    BasicSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [CanActivateRouteGuard, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
