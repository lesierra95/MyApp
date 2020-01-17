import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http:HttpClient) { }

  getApis(): Observable<any>{
    return this.http.get("https://swapi.co/api/");
  }
  getFilms(): Observable<any>{
    return this.http.get("https://swapi.co/api/films/");
  }
  getPeoples(): Observable<any>{
    return this.http.get("https://swapi.co/api/people/");
  }
  getSpecies(): Observable<any>{
    return this.http.get("https://swapi.co/api/species/");
  }
}
