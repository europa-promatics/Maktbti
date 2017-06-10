import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubscriptionPlans } from './subscription-plans';

@NgModule({
  declarations: [
    SubscriptionPlans,
  ],
  imports: [
    IonicPageModule.forChild(SubscriptionPlans),
  ],
  exports: [
    SubscriptionPlans
  ]
})
export class SubscriptionPlansModule {}
