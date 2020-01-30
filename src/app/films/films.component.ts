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
  dFilmById: Observable <any>;
  dSchema: Observable <any>;

  constructor(private filmService: MainService) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe(
      data => {
        this.dFilms = data;
      }
    );

//    this._film_Service.getFilmById(dFilmById).subscribe(
//      data=>
//      {
//        this.dFilms = data;
//      }
//    )

//    this._film_Service.getSchema().subscribe(
//      data=>
//      {
//        this.dSchema = data;
//      }
//    )
  }

}
