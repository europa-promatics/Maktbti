import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{Newlogin} from '../newlogin/newlogin'

/**
 * Generated class for the Thanks page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html',
})
export class Thanks {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Thanks');
  }
  goBackLogin(){
  	this.navCtrl.pop().then(()=>this.navCtrl.pop())
  }

}
