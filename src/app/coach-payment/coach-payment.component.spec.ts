import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachPaymentComponent } from './coach-payment.component';

describe('CoachPaymentComponent', () => {
  let component: CoachPaymentComponent;
  let fixture: ComponentFixture<CoachPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
