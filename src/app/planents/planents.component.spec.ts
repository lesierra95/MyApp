import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanentsComponent } from './planents.component';

describe('PlanentsComponent', () => {
  let component: PlanentsComponent;
  let fixture: ComponentFixture<PlanentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
