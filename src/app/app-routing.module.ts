import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CerebralPalsyComponent } from './cerebral-palsy/cerebral-palsy.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { GrowthDevelopmentComponent } from './growth-development/growth-development.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'blog', component: BlogComponent },
    { path: 'marcos-do-desenvolvimento',   redirectTo: 'marcos-do-desenvolvimento/6-meses', pathMatch: 'full' },
    { path:'marcos-do-desenvolvimento/:age', component: GrowthDevelopmentComponent },
    { path:'paralisia-cerebral', component: CerebralPalsyComponent },
    { path:'sobre-mim', component: AboutComponent },
    { path:'atendimento', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
