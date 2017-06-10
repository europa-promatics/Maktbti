import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Newlogin} from "../newlogin/newlogin";
import {Signup} from "../signup/signup";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 	onSignin(){
 		this.navCtrl.push(Newlogin);
 	}
 	onSignup(){
 		this.navCtrl.push(Signup);
 	}
}
