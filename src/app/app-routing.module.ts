import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { SpeciesComponent } from './species/species.component';
import { PlanentsComponent } from './planents/planents.component';


const routes: Routes = [

  {path: 'films', component: FilmsComponent },
  {path: 'people', component: PeopleComponent},
  {path: 'planents', component: PlanentsComponent },
  {path: 'species', component: SpeciesComponent},
  { path: '',   redirectTo: '/films', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
