import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteArticlesEncourComponent } from './comite-articles-encour.component';

describe('ComiteArticlesEncourComponent', () => {
  let component: ComiteArticlesEncourComponent;
  let fixture: ComponentFixture<ComiteArticlesEncourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComiteArticlesEncourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteArticlesEncourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
