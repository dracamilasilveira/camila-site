import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CerebralPalsyComponent } from './cerebral-palsy/cerebral-palsy.component';
import { AboutComponent } from './about/about.component';
import { GrowthDevelopmentComponent } from './growth-development/growth-development.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'blog', component: BlogComponent },
    { path:'marcos-do-desenvolvimento', component: GrowthDevelopmentComponent },
    { path:'paralisia-cerebral', component: CerebralPalsyComponent },
    { path:'sobre-mim', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
