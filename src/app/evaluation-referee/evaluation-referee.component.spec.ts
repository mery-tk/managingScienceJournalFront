import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationRefereeComponent } from './evaluation-referee.component';

describe('EvaluationRefereeComponent', () => {
  let component: EvaluationRefereeComponent;
  let fixture: ComponentFixture<EvaluationRefereeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationRefereeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
