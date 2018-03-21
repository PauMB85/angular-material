import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";

import { AppComponent } from './app.component';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { LoginComponent } from './components/auth/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import {AppRoutingModule} from "./app-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    LoginComponent,
    WelcomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
