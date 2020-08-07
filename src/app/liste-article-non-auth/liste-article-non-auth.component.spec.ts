import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticleNonAuthComponent } from './liste-article-non-auth.component';

describe('ListeArticleNonAuthComponent', () => {
  let component: ListeArticleNonAuthComponent;
  let fixture: ComponentFixture<ListeArticleNonAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeArticleNonAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeArticleNonAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
