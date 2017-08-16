import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLearnerDashboardCoachInfoComponent } from './user-learner-dashboard-coach-info.component';

describe('UserLearnerDashboardCoachInfoComponent', () => {
  let component: UserLearnerDashboardCoachInfoComponent;
  let fixture: ComponentFixture<UserLearnerDashboardCoachInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLearnerDashboardCoachInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLearnerDashboardCoachInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
