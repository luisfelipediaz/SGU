import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Availability } from '../../app/data-model';

@Injectable()
export class AvailabilityProvider {

  constructor(public afs: AngularFirestore) {
  }

  public post(newAvailability: Availability): Promise<void> {
    newAvailability.id = this.afs.createId();
    return this.afs.doc(`/availability/${newAvailability.id}`).set(newAvailability);
  }

}
