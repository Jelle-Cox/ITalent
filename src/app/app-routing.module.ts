import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { StudieReisComponent } from './studie-reis/studie-reis.component';
import { CareAthonComponent } from './care-athon/care-athon.component';
import { Vpw2019Component } from './vpw2019/vpw2019.component';
import { ReflectieComponent } from './reflectie/reflectie.component';


const routes: Routes = [
  {path: '', redirectTo: 'profiel', pathMatch: 'full'},
  {
    path: 'profiel',
    component: ProfileComponent
  },
  {
    path: 'studiereis',
    component: StudieReisComponent
  },
  {
    path: 'care-athon',
    component: CareAthonComponent
  },
  {
    path: 'vpw2019',
    component: Vpw2019Component
  },
  {
    path: 'innovatieroute',
    component: StudieReisComponent
  },
  {
    path: 'reflectie',
    component: ReflectieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
