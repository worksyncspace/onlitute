import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachSignup02Component } from './coach-signup-02.component';

describe('CoachSignup02Component', () => {
  let component: CoachSignup02Component;
  let fixture: ComponentFixture<CoachSignup02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachSignup02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachSignup02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
