import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarOnliComponent } from './calendar-onli.component';

describe('CalendarOnliComponent', () => {
  let component: CalendarOnliComponent;
  let fixture: ComponentFixture<CalendarOnliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarOnliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarOnliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
