import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LawComponent } from './law/law.component';
import { PolicyComponent } from './policy/policy.component';
import { WorksComponent } from './works/works.component';
import { RuleComponent } from './rule/rule.component';
import { RecruitComponent } from './recruit/recruit.component';

import { HomeComponent } from './home/home.component';
import { HomeCarouselComponent } from './home/carousel/carousel.component';
import { HomeAboutusComponent } from './home/aboutus/aboutus.component';
import { HomeCeoComponent } from './home/ceo/ceo.component';
import { HomeHowtouseComponent } from './home/howtouse/howtouse.component';
import { HomeSeviceComponent } from './home/sevice/sevice.component';
import { HomeNewsComponent } from './home/news/news.component';
import { HomeRecruitComponent } from './home/recruit/recruit.component';
import { HomeFaqComponent } from './home/faq/faq.component';
import { HomeContactComponent } from './home/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LawComponent,
    PolicyComponent,
    WorksComponent,
    RuleComponent,
    RecruitComponent,
    HomeCarouselComponent,
    HomeAboutusComponent,
    HomeCeoComponent,
    HomeHowtouseComponent,
    HomeSeviceComponent,
    HomeRecruitComponent,
    HomeNewsComponent,
    HomeFaqComponent,
    HomeContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
