import { Component, OnInit } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.scss']
})
export class SwapiComponent implements OnInit {

  constructor(private _swpiService: SwapiService) { }

  dApis:Object;
  dFilms:Object;
  dPeoples:object;
  dSpecies:object

  ngOnInit() {
    this._swpiService.getApis().subscribe(
      data=>
      {
        this.dApis = data;
      }
    )
    this._swpiService.getFilms().subscribe(
      data=>
      {
        this.dFilms = data;
      }
    )
    this._swpiService.getPeoples().subscribe(
      data=>
      {
        this.dPeoples = data;
      }
    )
    this._swpiService.getSpecies().subscribe(
      data=>
      {
        this.dSpecies = data;
      }
    )

  };
  
  name = "Leidy";

}
