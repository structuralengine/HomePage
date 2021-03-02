import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StripeModule } from "stripe-angular"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LawComponent } from './law/law.component';
import { MainComponent } from './main/main.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    LawComponent,
    MainComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StripeModule.forRoot('pk_test_feXANuMavbqDI0fNHJdNhGk2'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

