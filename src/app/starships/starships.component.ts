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

  constructor(private http: MainService) {
  }

  ngOnInit() {
    this.http.getStarships().subscribe(
      data => {
        this.dStarships = data;
      }
    );
  }
  
  onClickSubmit(formData) {  
    this.http.getSearch("starships/?search=" + formData.query).subscribe(
      data => {
        this.dStarships = data;
      }
    );
  }

}
