import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  dSpecies: Observable<any>

  constructor(private speciesService: MainService) {
  }

  ngOnInit() {
    this.speciesService.getSpecies().subscribe(
      data => {
        this.dSpecies = data;
      }
    );

  }
}
