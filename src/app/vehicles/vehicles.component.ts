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

  constructor(private http: MainService) {
  }

  ngOnInit() {
    this.http.getVehicles().subscribe(
      data => {
        this.dVehicles = data;
      }
    );
  }
  
  onClickSubmit(formData) {  
    this.http.getSearch("vehicles/?search=" + formData.query).subscribe(
      data => {
        this.dVehicles = data;
      }
    );
  }

}
