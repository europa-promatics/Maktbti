import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedBack } from '../feed-back/feed-back' ;
import { SubscriptionPlans } from '../subscription-plans/subscription-plans';
import { ListeningTime } from '../listening-time/listening-time';
import { PaymentHistory } from '../payment-history/payment-history';

/**
 * Generated class for the MyAccount page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccount {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccount');
  }
  onFeedback(){
  	this.navCtrl.push(FeedBack);
  }
  onSubscriptionPlans(){
    this.navCtrl.push(SubscriptionPlans);
  }
  onListentiming(){
    this.navCtrl.push(ListeningTime);
  }
  onPaymentHistory(){
    this.navCtrl.push(PaymentHistory);
  }

}
