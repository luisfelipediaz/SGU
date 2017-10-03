import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
