import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Availability } from '../../app/data-model';
import { AvailabilityProvider } from '../../providers/availability/availability';

@Component({
  selector: 'page-new-availability',
  templateUrl: 'new-availability.html',
})
export class NewAvailabilityPage {

  availability: Availability = {
    id: null,
    date: null,
    time: new Date().toLocaleTimeString(),
    recurrent: false
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public availabilityProvider: AvailabilityProvider) {
    this.availability.date = this.navParams.data.date._i;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAvailabilityPage');
  }

  save() {
    this.availabilityProvider.post(this.availability).then(() => {
      
    }, () => alert(`Ocurrió un error al tratar de guardar la disponibilidad`));
  }

}
