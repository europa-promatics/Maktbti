import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAccount } from './my-account';

@NgModule({
  declarations: [
    MyAccount,
  ],
  imports: [
    IonicPageModule.forChild(MyAccount),
  ],
  exports: [
    MyAccount
  ]
})
export class MyAccountModule {}
