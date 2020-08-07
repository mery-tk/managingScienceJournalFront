import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteArticlesRecentesComponent } from './comite-articles-recentes.component';

describe('ComiteArticlesRecentesComponent', () => {
  let component: ComiteArticlesRecentesComponent;
  let fixture: ComponentFixture<ComiteArticlesRecentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComiteArticlesRecentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteArticlesRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
