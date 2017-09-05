import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCompleteProfileComponent } from './coach-complete-profile.component';

describe('CoachCompleteProfileComponent', () => {
  let component: CoachCompleteProfileComponent;
  let fixture: ComponentFixture<CoachCompleteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCompleteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
