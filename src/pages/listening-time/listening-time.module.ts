import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeningTime } from './listening-time';

@NgModule({
  declarations: [
    ListeningTime,
  ],
  imports: [
    IonicPageModule.forChild(ListeningTime),
  ],
  exports: [
    ListeningTime
  ]
})
export class ListeningTimeModule {}
