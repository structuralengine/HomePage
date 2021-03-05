import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LawComponent } from './law/law.component';
import { MainComponent } from './main/main.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ShopComponent } from './shop/shop.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import {  SliderComponent } from  './slider/slider.component'


const routes: Routes = [
  { path: '', redirectTo: '/slider', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'law', component: LawComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'slider', component: SliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
