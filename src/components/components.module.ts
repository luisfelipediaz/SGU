import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar/calendar';
import { NotificationCardComponent } from './notification-card/notification-card';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [CalendarComponent,
		NotificationCardComponent],
	imports: [IonicModule],
	exports: [CalendarComponent,
		NotificationCardComponent]
})
export class ComponentsModule { }
