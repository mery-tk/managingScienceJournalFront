import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesArticlesComponent } from './mes-articles.component';

describe('MesArticlesComponent', () => {
  let component: MesArticlesComponent;
  let fixture: ComponentFixture<MesArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
