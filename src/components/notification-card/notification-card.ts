import { Component, Input } from '@angular/core';

/**
 * Generated class for the NotificationCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification-card',
  templateUrl: 'notification-card.html'
})
export class NotificationCardComponent {

  @Input()
  task: string

  constructor() {
    
  }

}
