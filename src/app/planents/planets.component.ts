import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  dPlanets: Observable <any>;

  constructor(private planetsService: MainService) { }

  ngOnInit() {
    this.planetsService.getPlanents().subscribe(
      data => {
        this.dPlanets = data;
      }
    );
  }

}
