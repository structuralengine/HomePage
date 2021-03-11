import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxStripeModule } from 'ngx-stripe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LawComponent } from './law/law.component';
import { MainComponent } from './main/main.component';
import { ShopComponent } from './shop/shop.component';
import { BaseComponent } from './base/base.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceComponent } from './main/service/service.component';
import { OnedayComponent } from './main/oneday/oneday.component';
import { AboutComponent } from './main/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    LawComponent,
    MainComponent,
    ShopComponent,
    BaseComponent,
    SliderComponent,
    ServiceComponent,
    OnedayComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_feXANuMavbqDI0fNHJdNhGk2'),
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

