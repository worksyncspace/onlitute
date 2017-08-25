import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLearnerComponent } from './page-learner.component';

describe('PageLearnerComponent', () => {
  let component: PageLearnerComponent;
  let fixture: ComponentFixture<PageLearnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLearnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
