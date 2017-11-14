import { Component, Input, OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import { Options } from "fullcalendar";

/*
  Generated class for the Calendar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  template: '<div></div>',
  selector: 'angular2-fullcalendar'
})
export class CalendarComponent implements OnInit, AfterViewInit {

  @Input() options: Options;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('angular2-fullcalendar').fullCalendar(this.options);
    }, 100)
  }

  updateEvent(event) {
    $(this.element.nativeElement).fullCalendar('updateEvent', event);
  }

  clientEvents(idOrFilter) {
    $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
  }

  addEventSource(events) {
    $(this.element.nativeElement).fullCalendar('addEventSource', events);
  }

  removeEvent(event) {
    $(this.element.nativeElement).fullCalendar('removeEvents', event);
  }
}
