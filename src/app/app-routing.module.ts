import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
