import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanentComponent } from './planent.component';

describe('PlanentComponent', () => {
  let component: PlanentComponent;
  let fixture: ComponentFixture<PlanentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
