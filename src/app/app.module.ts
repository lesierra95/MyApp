import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapiComponent } from './swapi/swapi.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planents/planets.component';

@NgModule({
  declarations: [
    AppComponent,
    SwapiComponent,
    FilmsComponent,
    PeopleComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
