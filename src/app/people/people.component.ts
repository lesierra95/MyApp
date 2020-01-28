import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  
  dPeople: Observable <any>

  constructor(private _film_Service: MainService) { }

  ngOnInit() {
    this._film_Service.getPeople().subscribe(
      data=>
      {
        this.dPeople = data;
      }
    )
  }

}
