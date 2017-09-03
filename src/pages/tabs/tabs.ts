import { Component } from '@angular/core';
import { CalendarioPage } from "../calendario/calendario";
import { RegistrarPage } from "../registrar/registrar";
import { NotificacionesPage } from "../notificaciones/notificaciones";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalendarioPage;
  tab2Root = RegistrarPage;
  tab3Root = NotificacionesPage;

  constructor() {

  }
}
