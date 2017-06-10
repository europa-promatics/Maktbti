import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Thanks } from './thanks';

@NgModule({
  declarations: [
    Thanks,
  ],
  imports: [
    IonicPageModule.forChild(Thanks),
  ],
  exports: [
    Thanks
  ]
})
export class ThanksModule {}
