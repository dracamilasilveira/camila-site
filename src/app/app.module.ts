import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule  } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule  } from './material.module';
import { DialogOverviewDetailed  } from './dialog-detailed';
import { BlogComponent } from './blog/blog.component';
import { InfoSiteComponent } from './info-site/info-site.component';
import { GrowthDevelopmentComponent } from './growth-development/growth-development.component';
import { CerebralPalsyComponent } from './cerebral-palsy/cerebral-palsy.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    DialogOverviewDetailed,
    AppComponent,
    HomeComponent,
    BlogComponent,
    InfoSiteComponent,
    GrowthDevelopmentComponent,
    CerebralPalsyComponent,
    AboutComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [DialogOverviewDetailed],
  bootstrap: [AppComponent]
})
export class AppModule { }
