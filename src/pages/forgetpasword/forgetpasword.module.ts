import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Forgetpasword } from './forgetpasword';

@NgModule({
  declarations: [
    Forgetpasword,
  ],
  imports: [
    IonicPageModule.forChild(Forgetpasword),
  ],
  exports: [
    Forgetpasword
  ]
})
export class ForgetpaswordModule {}
