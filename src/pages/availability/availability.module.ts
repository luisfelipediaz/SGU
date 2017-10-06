import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailabilityPage } from './availability';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailabilityPage),
    ComponentsModule
  ],
})
export class AvailabilityPageModule {}
