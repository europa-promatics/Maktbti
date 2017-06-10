import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Newlogin } from './newlogin';

@NgModule({
  declarations: [
    Newlogin,
  ],
  imports: [
    IonicPageModule.forChild(Newlogin),
  ],
  exports: [
    Newlogin
  ]
})
export class NewloginModule {}
