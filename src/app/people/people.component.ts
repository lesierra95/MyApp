import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  dPeople: Observable<any>;

  constructor(private http: MainService) {
  }

  ngOnInit() {
    this.http.getPeople().subscribe(
      data => {
        this.dPeople = data;
      }
    );
  }
  
  onClickSubmit(formData) {  
    this.http.getSearch("people/?search=" + formData.query).subscribe(
      data => {
        this.dPeople = data;
      }
    );
  }

}
