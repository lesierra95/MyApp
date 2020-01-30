import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MainService} from '../services/main.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  dStarships: Observable<any>

  constructor(private starShipsService: MainService) {
  }

  ngOnInit() {
    this.starShipsService.getStarships().subscribe(
      data => {
        this.dStarships = data;
      }
    );
  }

}
