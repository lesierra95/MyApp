import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = environment.URL;

  constructor(private http: HttpClient) {
  }

  // /films/ -- get all the film resources
  getFilms(): Observable<any> {
    return this.http.get(environment.URL + 'films/');
  }

  getSearch(query): Observable <any> {
    return this.http.get(environment.URL + query);
  }

  // /films/:id/ -- get a specific film resource
  getFilmById(idFilm): Observable<any> {
    return this.http.get(environment.URL + 'films/' + idFilm + '/');
  }

  // /films/schema/ -- view the JSON schema for this resource
  getSchema(): Observable<any> {
    return this.http.get(environment.URL + 'films/schema/');
  }

  // /people/ -- get all the people resources
  getPeople(): Observable<any> {
    return this.http.get(environment.URL + 'people/');
  }

  // /people/:id/ -- get a specific people resource
  // /people/schema/ -- view the JSON schema for this resource
  // planet/ ---
  getPlanets(): Observable<any> {
    return this.http.get(environment.URL + 'planets/');
  }

  // species/ ---
  getSpecies(): Observable<any> {
    return this.http.get(environment.URL + 'species/');
  }

  // starships/ ---
  getStarships(): Observable<any> {
    return this.http.get(environment.URL + 'starships/');

  }

  // vehicles/ ---
  getVehicles(): Observable<any> {
    return this.http.get(environment.URL + 'vehicles/');

  }
  
}

