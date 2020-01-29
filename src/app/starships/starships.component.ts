import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  dStarships: Observable <any>

  constructor(private _film_Service: MainService) { }

  ngOnInit() {
    this._film_Service.getStarships().subscribe(
      data=>
      {
        this.dStarships = data;
      }
    )
  }

}
