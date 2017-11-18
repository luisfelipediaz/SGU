import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalendarComponent } from '../../components/calendar/calendar';
import { TaskProvider } from '../../providers/task/task';
import { Task } from '../../app/data-model';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  @ViewChild(CalendarComponent) calendar: CalendarComponent;


  calendarOptions: Object = {
    height: 'parent',
    fixedWeekCount: false,
    defaultView: 'listWeek',
    noEventsMessage: "¡No tienes nada para esta semana!",
    locale: "es",
    defaultDate: new Date(),
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [],
    eventClick: (event) => {
      console.log(event);
      this.navCtrl.push('RegisterPage', {
        task: event.task as Task
      });
    }
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public taskProvider: TaskProvider) {

    this.taskProvider.getTasks().subscribe(tasks => {

      let added = tasks.added.map(task => {
        return {
          id: task.id,
          title: task.name,
          start: task.delivery,
          task: task
        }
      });
      this.calendar.addEventSource(added);

      tasks.removed.forEach(task => {
        this.calendar.removeEvent(task.id);
      });

      let modified = tasks.modified.map(task => {
        this.calendar.removeEvent(task.id);
        return {
          id: task.id,
          title: task.name,
          start: task.delivery,
          task: task
        }
      });      
      this.calendar.addEventSource(modified);
    });
  }

}
