import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLearnerDashboardComponent } from './user-learner-dashboard.component';

describe('UserLearnerDashboardComponent', () => {
  let component: UserLearnerDashboardComponent;
  let fixture: ComponentFixture<UserLearnerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLearnerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLearnerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
