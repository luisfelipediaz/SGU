import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../app/data-model';
import { CalendarComponent } from '../../components/calendar/calendar';
import { TaskProvider } from '../../providers/task/task';

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

  @ViewChild(CalendarComponent) calendar: CalendarComponent;

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public taskProvider: TaskProvider) {

    this.taskProvider.getTasks().subscribe(tasks => {

      debugger;
      this.calendarOptions["events"] = tasks.map((task) => {
        return {
          title: task.name,
          start: task.delivery
        }
      });
      this.calendar.addEventSource(this.calendarOptions["events"]);
    });
  }

}
