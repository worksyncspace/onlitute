import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerSignup02Component } from './learner-signup-02.component';

describe('LearnerSignup02Component', () => {
  let component: LearnerSignup02Component;
  let fixture: ComponentFixture<LearnerSignup02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerSignup02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerSignup02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
