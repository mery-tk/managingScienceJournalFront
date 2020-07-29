import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAEvaluerComponent } from './articles-aevaluer.component';

describe('ArticlesAEvaluerComponent', () => {
  let component: ArticlesAEvaluerComponent;
  let fixture: ComponentFixture<ArticlesAEvaluerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesAEvaluerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesAEvaluerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
