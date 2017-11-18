import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { NewAvailabilityPage } from '../new-availability/new-availability';

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
    locale: 'es',
    eventLimit: true, // allow "more" link when too many events
    events: [],
    dayClick: (date) => {
      const modal =  this.modalCtrl.create(NewAvailabilityPage, {
        date: date
      });
      modal.present();
    }
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

}
