import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { StudieReisComponent } from './studie-reis/studie-reis.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CareAthonComponent } from './care-athon/care-athon.component';
import { Vpw2019Component } from './vpw2019/vpw2019.component';
import { ReflectieComponent } from './reflectie/reflectie.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StudieReisComponent,
    CareAthonComponent,
    Vpw2019Component,
    ReflectieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
