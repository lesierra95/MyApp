import { Component, OnInit } from '@angular/core';
import { SwapiService } from './swapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.scss']
})
export class SwapiComponent implements OnInit {
  constructor(private swApiService: SwapiService) { }

  dApis: Observable <any>;
  dFilms: Observable <any>;
  dPeoples: Observable <any>;
  dSpecies: Observable <any>;

  ngOnInit() {
    this.swApiService.getApis().subscribe(
      data => {
        this.dApis = data;
      }
    );
    this.swApiService.getFilms().subscribe(
      data => {
        this.dFilms = data;
      }
    );
    this.swApiService.getPeoples().subscribe(
      data => {
        this.dPeoples = data;
      }
    );
    this.swApiService.getSpecies().subscribe(
      data => {
        this.dSpecies = data;
      }
    )

  };

}
