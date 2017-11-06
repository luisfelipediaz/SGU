import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewAvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-availability',
  templateUrl: 'new-availability.html',
})
export class NewAvailabilityPage {

  availability: any = {
    date: null,
    timeStarts: new Date().toLocaleTimeString()
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.availability.date = this.navParams.data.date._i;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAvailabilityPage');
  }

  save() {
    console.log(this.availability);
  }

}
