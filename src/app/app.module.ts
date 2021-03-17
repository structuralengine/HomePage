import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LawComponent } from './law/law.component';
import { MainComponent } from './main/main.component';
import { BaseComponent } from './base/base.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceComponent } from './main/service/service.component';
import { OnedayComponent } from './main/oneday/oneday.component';
import { AboutComponent } from './main/about/about.component';

//import the Stripe Module
import { ShopComponent } from './shop/shop.component';
import { PaymentFormComponent } from './shop/payment-form/payment-form.component';
import { StripeTestComponent } from './shop/stripe-test/stripe-test.component';


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
    PaymentFormComponent,
    StripeTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_feXANuMavbqDI0fNHJdNhGk2'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

