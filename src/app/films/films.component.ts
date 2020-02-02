import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  dFilms: Observable <any>;

  constructor(private http: MainService) { }

  ngOnInit() {
    this.http.getFilms().subscribe(
      data => {
        this.dFilms = data;
      }
    );
  }
  
  onClickSubmit(formData) {  
    this.http.getSearch("films/?search=" + formData.query).subscribe(
      data => {
        this.dFilms = data;
      }
    );
  }

}
