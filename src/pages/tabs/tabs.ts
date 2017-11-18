import { Component } from '@angular/core';
import { CalendarPage } from '../calendar/calendar';
import { RegisterPage } from '../register/register';
import { NotificationsPage } from '../notifications/notifications';
import { AvailabilityPage } from '../availability/availability';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalendarPage;
  tab2Root = RegisterPage;
  tab3Root = NotificationsPage;
  tab4Root = AvailabilityPage;

  constructor() {

  }
}
