import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {
  calendarOptions: Object = {
    height: 'parent',
    fixedWeekCount: false,
    defaultDate: new Date(),
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'Prototipo',
        start: '2017-09-01'
      },
      {
        title: 'Presentación',
        start: '2017-09-02'
      }
    ],
    eventClick: (...a) => {
      console.log(a)
    }
  };

  constructor(public navCtrl: NavController) {
  }

}
