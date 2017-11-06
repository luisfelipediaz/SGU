import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAvailabilityPage } from './new-availability';

@NgModule({
  declarations: [
    NewAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAvailabilityPage),
  ],
})
export class NewAvailabilityPageModule {}
