import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FilmsComponent} from './films/films.component';
import {PeopleComponent} from './people/people.component';
import {SpeciesComponent} from './species/species.component';
import {PlanetsComponent} from './planets/planets.component';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {StarshipsComponent} from './starships/starships.component';


const routes: Routes = [
  {path: 'films', component: FilmsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: '**', component: FilmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
