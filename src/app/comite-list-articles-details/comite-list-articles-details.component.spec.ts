import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteListArticlesDetailsComponent } from './comite-list-articles-details.component';

describe('ComiteListArticlesDetailsComponent', () => {
  let component: ComiteListArticlesDetailsComponent;
  let fixture: ComponentFixture<ComiteListArticlesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComiteListArticlesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteListArticlesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
