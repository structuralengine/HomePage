import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LawComponent } from './law/law.component';
import { PolicyComponent } from './policy/policy.component';
import { WorksComponent } from './works/works.component';
import { RuleComponent } from './rule/rule.component';
import { RecruitComponent } from './recruit/recruit.component';

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
    RecruitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
