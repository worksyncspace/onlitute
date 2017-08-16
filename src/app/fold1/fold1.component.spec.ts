import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fold1Component } from './fold1.component';

describe('Fold1Component', () => {
  let component: Fold1Component;
  let fixture: ComponentFixture<Fold1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fold1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fold1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
