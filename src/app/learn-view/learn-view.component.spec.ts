import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnViewComponent } from './learn-view.component';

describe('LearnViewComponent', () => {
  let component: LearnViewComponent;
  let fixture: ComponentFixture<LearnViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
