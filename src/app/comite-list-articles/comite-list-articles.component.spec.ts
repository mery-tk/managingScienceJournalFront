import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteListArticlesComponent } from './comite-list-articles.component';

describe('ComiteListArticlesComponent', () => {
  let component: ComiteListArticlesComponent;
  let fixture: ComponentFixture<ComiteListArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComiteListArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteListArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
