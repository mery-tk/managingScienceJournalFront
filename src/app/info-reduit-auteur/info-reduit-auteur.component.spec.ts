import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReduitAuteurComponent } from './info-reduit-auteur.component';

describe('InfoReduitAuteurComponent', () => {
  let component: InfoReduitAuteurComponent;
  let fixture: ComponentFixture<InfoReduitAuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoReduitAuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReduitAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
