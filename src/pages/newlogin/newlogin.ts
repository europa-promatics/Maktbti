import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { Signup } from '../signup/signup';
import { Forgetpasword }   from '../forgetpasword/forgetpasword';
import { Category } from '../category/category';
import { Observable } from 'rxjs/Rx';
import { LoginProvider } from '../../providers/login-provider';
/**
 * Generated class for the Newlogin page.
 *Forgetpasword
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-newlogin',
  templateUrl: 'newlogin.html',
  providers:[LoginProvider]
})
export class Newlogin{
logindata
  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingCtrl:LoadingController,private loginProvider:LoginProvider,private alert : AlertController) {
  	this.logindata={}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newlogin');
  }

	onSignIn(){
		let loading = this.loadingCtrl.create({content: 'Loading'});
						Observable.fromPromise(loading.present())
						.flatMap(data => this.loginProvider.Login(this.logindata))
						.subscribe(data =>
							loading.dismiss().then(() =>{ 
							//this.logindata.res = data
								if(data.status==1){
									 localStorage['user_id']=data.data.id;
									 localStorage['aut']="login";
									 this.alert.create({
					                  title:"Success",
					                  subTitle:"Login Succesful",
					                  buttons:[{
					                    text:"ok",
					                    handler:() => {
					                     this.navCtrl.setRoot(Category)
					                    }
					                  }]
                				}).present();      				
								}

							}),
					  error =>
		                    loading.dismiss().then(() => {
		                    	
                    		})
                    		)
		
	}
	signup(){
		this.navCtrl.push(Signup)
	}
	forgtpaswd(){
		this.navCtrl.push(Forgetpasword)
	}


}
