import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import {HttpClientModule}  from  '@angular/common/http'
import {ReactiveFormsModule  } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    ViewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
