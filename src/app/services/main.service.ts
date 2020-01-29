import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = environment.URL
  constructor(private http: HttpClient) { }
  
  // /films/ -- get all the film resources
  getFilms(): Observable<any>{
    return this.http.get(environment.URL + "films/");
  }

  // /films/:id/ -- get a specific film resource
  getFilmById(id_film): Observable<any>{
    return this.http.get(environment.URL + "films/" + id_film + "/");
  }

  // /films/schema/ -- view the JSON schema for this resource
  getSchema(): Observable<any>{
    return this.http.get(environment.URL + "films/schema/");
  }

  // /people/ -- get all the people resources
  getPeople(): Observable<any>{
    return this.http.get(environment.URL + "people/")
  }

  // /people/:id/ -- get a specific people resource
  // /people/schema/ -- view the JSON schema for this resource

  //planet/ ---
  getPlanents(): Observable<any>{
    return this.http.get(environment.URL + "planents/")
  }

   //species/ ---
   getSpecies(): Observable<any>{
    return this.http.get(environment.URL + "species/")
  }
  //starships/ ---
  getStarships(): Observable<any>{
  return this.http.get(environment.URL + "starships/")

  }
  //vehicles/ ---
  getVehicles(): Observable<any>{
    return this.http.get(environment.URL + "vehicles/")

}
}

