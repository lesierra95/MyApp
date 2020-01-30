import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  dVehicles: Observable<any>

  constructor(private vehiclesService: MainService) {
  }

  ngOnInit() {
    this.vehiclesService.getVehicles().subscribe(
      data => {
        this.dVehicles = data;
      }
    );
  }

}
