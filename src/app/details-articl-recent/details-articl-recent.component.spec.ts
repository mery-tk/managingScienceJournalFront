import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArticlRecentComponent } from './details-articl-recent.component';

describe('DetailsArticlRecentComponent', () => {
  let component: DetailsArticlRecentComponent;
  let fixture: ComponentFixture<DetailsArticlRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsArticlRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsArticlRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
