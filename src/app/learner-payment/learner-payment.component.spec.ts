import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerPaymentComponent } from './learner-payment.component';

describe('LearnerPaymentComponent', () => {
  let component: LearnerPaymentComponent;
  let fixture: ComponentFixture<LearnerPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
