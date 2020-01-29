import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-planents',
  templateUrl: './planents.component.html',
  styleUrls: ['./planents.component.scss']
})
export class PlanentsComponent implements OnInit {

  dPlanents: Observable <any>

  constructor(private _film_Service: MainService) { }

  ngOnInit() {
    this._film_Service.getPlanents().subscribe(
      data=>
      {
        this.dPlanents = data;
      }
    )
  }

}
