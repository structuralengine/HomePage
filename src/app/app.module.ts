import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main/main.component';

//import the Stripe Module
import { ShopComponent } from './shop/shop.component';
import { CreateCustomerComponent } from './shop/create-customer/create-customer.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShopComponent,
    CreateCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

