import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulInscriptionComponent } from './formul-inscription.component';

describe('FormulInscriptionComponent', () => {
  let component: FormulInscriptionComponent;
  let fixture: ComponentFixture<FormulInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
