import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'CalendarPage';
  tab2Root = 'RegisterPage';
  tab3Root = 'NotificationsPage';

  constructor() {

  }
}
