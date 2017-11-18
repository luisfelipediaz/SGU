import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppConfig } from './app.config';
import { TaskProvider } from '../providers/task/task';
import { AvailabilityProvider } from '../providers/availability/availability';
import { AvailabilityPage } from '../pages/availability/availability';
import { CalendarPage } from '../pages/calendar/calendar';
import { NewAvailabilityPage } from '../pages/new-availability/new-availability';
import { NotificationsPage } from '../pages/notifications/notifications';
import { RegisterPage } from '../pages/register/register';
import { CalendarComponent } from '../components/calendar/calendar';
import { NotificationCardComponent } from '../components/notification-card/notification-card';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AvailabilityPage,
    CalendarPage,
    NewAvailabilityPage,
    NotificationsPage,
    RegisterPage,
    CalendarComponent,
    NotificationCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(AppConfig.firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AvailabilityPage,
    CalendarPage,
    NewAvailabilityPage,
    NotificationsPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TaskProvider,
    AvailabilityProvider
  ]
})
export class AppModule { }
