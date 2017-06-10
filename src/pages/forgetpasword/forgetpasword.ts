import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import{Thanks} from '../thanks/thanks';
import { Observable } from 'rxjs/Rx';
import { LoginProvider } from '../../providers/login-provider';

/**
 * Generated class for the Forgetpasword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forgetpasword',
  templateUrl: 'forgetpasword.html',
  providers:[LoginProvider]
})
export class Forgetpasword {
show:boolean =true;
show1:boolean =false
forgot:any;
otpstatus:any;
unique_codeStatus:any;
passconStatus:any;
user_id:any;
  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          private loadingCtrl:LoadingController,
  	          private alert : AlertController,
  	          private loginProvider:LoginProvider) {
  	this.forgot={}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgetpasword');
  }
onEmailValidate(){
let loading = this.loadingCtrl.create({content: 'Loading'});
						Observable.fromPromise(loading.present())
						.flatMap(data => this.loginProvider.getOtp(this.forgot))
						.subscribe(data =>
							loading.dismiss().then(() =>{ 
								if(data.status==1){
							         //this.forgot.res = data
									 localStorage['uniquecode']=data.unique_code;
									   this.unique_codeStatus="otp";
									   this.user_id=data.id;

									 this.alert.create({
					                  title:"Success",
					                  subTitle:"Check your inbox for otp",
					                  buttons:[{
					                    text:"ok",
					                    handler:() => {
					                   this.show1=true;
									   this.show=false;

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
onOtpValidate(){
	 let loading = this.loadingCtrl.create({content: 'Loading'});
						Observable.fromPromise(loading.present())
		if(localStorage['uniquecode']==this.forgot.otp){
			loading.dismiss().then(() =>{
				this.unique_codeStatus="otpvalidated";
				this.otpstatus="validate";
			 })

		}else{
			loading.dismiss().then(() =>{
           this.otpstatus="notvalidate";})
		}

}
onChangePasss(){
	this.forgot.id=this.user_id;
  let loading = this.loadingCtrl.create({content: 'Loading'});
						Observable.fromPromise(loading.present())
						.flatMap(data => this.loginProvider.updatepassword(this.forgot))
						.subscribe(data =>
							loading.dismiss().then(() =>{ 
							this.forgot.res = data
								if(this.forgot.res.status==1){
										this.navCtrl.push(Thanks)
									 // this.alert.create({
					     //              title:"Success",
					     //              subTitle:"Login Succesful",
					     //              buttons:[{
					     //                text:"ok",
					     //                handler:() => {
					     //                // this.navCtrl.setRoot(Category)
					     //                }
					     //              }]
          //       				}).present();      				
								}

							}),
					  error =>
		                    loading.dismiss().then(() => {
		                    	
                    		})
                    )

}
 confirm(){
   if (this.forgot.password == this.forgot.confirm) {
     this.passconStatus=false;
   }
   else{
     this.passconStatus=true;
   }
  }
  pass_confirm(){
   if (this.forgot.confirm) {
     // code...
     if (this.forgot.password== this.forgot.confirm) {
     this.passconStatus=false;
   }
   else{
     this.passconStatus=true;
   }
   }
   
  }


}
