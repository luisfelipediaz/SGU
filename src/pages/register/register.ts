import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prioritys } from '../../app/app.enums';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  

  delivery: string = (new Date()).toISOString();
  name: string;
  descripcion: string;
  priority: string = Prioritys.Media

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }

  save() {
  }

}