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

  constructor(private http: MainService) {
  }

  ngOnInit() {
    this.http.getSpecies().subscribe(
      data => {
        this.dSpecies = data;
      }
    );
  }
  
  onClickSubmit(formData) {  
    this.http.getSearch("species/?search=" + formData.query).subscribe(
      data => {
        this.dSpecies = data;
      }
    );
  }
}
