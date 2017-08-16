import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPaymentComponent } from './learn-payment.component';

describe('LearnPaymentComponent', () => {
  let component: LearnPaymentComponent;
  let fixture: ComponentFixture<LearnPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
