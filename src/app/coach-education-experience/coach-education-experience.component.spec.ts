import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachEducationExperienceComponent } from './coach-education-experience.component';

describe('CoachEducationExperienceComponent', () => {
  let component: CoachEducationExperienceComponent;
  let fixture: ComponentFixture<CoachEducationExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachEducationExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachEducationExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
