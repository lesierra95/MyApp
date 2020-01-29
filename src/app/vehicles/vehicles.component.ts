import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  dVehicles: Observable <any>

  constructor(private _film_Service: MainService) { }

  ngOnInit() {
    this._film_Service.getVehicles().subscribe(
      data=>
      {
        this.dVehicles = data;
      }
    )
  }

}
