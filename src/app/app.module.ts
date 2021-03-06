import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FilmsComponent} from './films/films.component';
import {PeopleComponent} from './people/people.component';
import {StarshipsComponent} from './starships/starships.component';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {SpeciesComponent} from './species/species.component';
import {PlanetsComponent} from './planets/planets.component';

@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
