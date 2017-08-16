import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';

@Component({
  selector: 'app-calendar-onli',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-onli.component.html',
  styleUrls: ['./calendar-onli.component.css']
})
export class CalendarOnliComponent implements OnInit {

  view:string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: Date;
  constructor() { }

  ngOnInit() {

  }
}
