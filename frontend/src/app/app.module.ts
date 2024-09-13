import { NgModule } from '@angular/core';
//import { platformBrowser } from '@angular/platform-browser';
//import { AppModule } from './app.module';
//import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import {Routes, RouterModule} from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AuthService } from './services/auth.service';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//import { TabsModule } from 'ngx-bootstrap/tabs';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
 {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component:PropertyDetailComponent},
 {path: '*', component: PropertyListComponent},
 {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/login', component: UserLoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
      PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      //PropertyDetailComponent,
      UserRegisterComponent,
      UserLoginComponent,
      //TooltipModule,
      //TabsModule.forRoot()
      //BrowserAnimationsModule,
      //BsDropdownModule



                 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    //BrowserAnimationsModule

  ],
  providers: [
HousingService,
AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
