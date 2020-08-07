import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArticleNonAuthComponent } from './details-article-non-auth.component';

describe('DetailsArticleNonAuthComponent', () => {
  let component: DetailsArticleNonAuthComponent;
  let fixture: ComponentFixture<DetailsArticleNonAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsArticleNonAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsArticleNonAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
