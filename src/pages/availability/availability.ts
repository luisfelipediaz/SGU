import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-availability',
  templateUrl: 'availability.html',
})
export class AvailabilityPage {

  calendarOptions = {
    height: 'parent',
    fixedWeekCount: false,
    defaultDate: new Date(),
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [],
    dayClick: (date, jsEvent, view) => {
      debugger;
      console.log(date);
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
