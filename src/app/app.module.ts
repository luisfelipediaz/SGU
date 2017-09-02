import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { CalendarioPage } from "../pages/calendario/calendario";
import { RegistrarPage } from "../pages/registrar/registrar";
import { NotificacionesPage } from "../pages/notificaciones/notificaciones";
import { CalendarComponent } from "../components/calendar/calendar";



@NgModule({
  declarations: [
    MyApp,
    CalendarioPage,
    RegistrarPage,
    NotificacionesPage,
    TabsPage,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarioPage,
    RegistrarPage,
    NotificacionesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
