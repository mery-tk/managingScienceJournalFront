import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationComiteComponent } from './evaluation-comite.component';

describe('EvaluationComiteComponent', () => {
  let component: EvaluationComiteComponent;
  let fixture: ComponentFixture<EvaluationComiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationComiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
