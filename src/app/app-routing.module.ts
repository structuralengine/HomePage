import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LawComponent } from './law/law.component';
import { PolicyComponent } from './policy/policy.component';
import { RecruitComponent } from './recruit/recruit.component';
import { RuleComponent } from './rule/rule.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'law', component: LawComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'works', component: WorksComponent },
  { path: 'rule', component: RuleComponent },
  { path: 'recruit', component: RecruitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
