import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReduitArticleComponent } from './info-reduit-article.component';

describe('InfoReduitArticleComponent', () => {
  let component: InfoReduitArticleComponent;
  let fixture: ComponentFixture<InfoReduitArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoReduitArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReduitArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
