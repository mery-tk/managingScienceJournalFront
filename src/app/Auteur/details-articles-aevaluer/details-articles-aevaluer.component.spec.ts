import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArticlesAEvaluerComponent } from './details-articles-aevaluer.component';

describe('DetailsArticlesAEvaluerComponent', () => {
  let component: DetailsArticlesAEvaluerComponent;
  let fixture: ComponentFixture<DetailsArticlesAEvaluerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsArticlesAEvaluerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsArticlesAEvaluerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
