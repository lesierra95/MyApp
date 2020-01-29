import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  dSpecies: Observable <any>

  constructor(private _film_Service: MainService) { }

  ngOnInit() {
    
    this._film_Service.getSpecies().subscribe(
      data=>
      {
        this.dSpecies = data;
      }
    )

}
}