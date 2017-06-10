 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { Category } from '../category/category';
import { Observable } from 'rxjs/Rx';
import { SignUp } from "../../providers/sign-up"
import { Http } from '@angular/http';
/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers:[SignUp]
})
export class Signup {
 signupdata:any
 confirm_password;
 message;
 termcondition
  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams,private signupprovider: SignUp,
    private loadingCtrl:LoadingController,private alert : AlertController) {
    this.signupdata={}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

onSignup(){
     let loading = this.loadingCtrl.create({content: 'Loading'});
            Observable.fromPromise(loading.present())
            .flatMap(data => this.signupprovider.signup(this.signupdata))
            .subscribe(data =>
              loading.dismiss().then(() =>{ 
              this.signupdata.response = data
              if(this.signupdata.response.status==1){
                this.alert.create({
                  title:"Success",
                  subTitle:"Signup Successfull. Please check your email.",
                  buttons:[{
                    text:"ok",
                    handler:() => {
                     this.navCtrl.pop();
                    }
                  }]
                }).present();      
          }
          else if (this.signupdata.response.status==0) {
            this.alert.create({
                  title:"Already Registered",
                  subTitle:"Entered email address is already registered with us.",
                  buttons:[{
                    text:"ok",
                    handler:() => {
                     this.navCtrl.pop();
                    }
                  }]
                }).present();
          }
          }),
               error =>
                    loading.dismiss().then(() => {
                        this.alert.create({
                        title:"Error",
                        subTitle:"Something went wrong please try again",
                        buttons:[{
                        text:"ok",
                        handler:() => {
                        
                    }
                  }]
                }).present(); 
                    })
     )
}
 confirm(){
   if (this.confirm_password == this.signupdata.password) {
     this.message=false;
   }
   else{
     this.message=true;
   }
  }
  pass_confirm(){
   if (this.confirm_password) {
     // code...
     if (this.confirm_password == this.signupdata.password) {
     this.message=false;
   }
   else{
     this.message=true;
   }
   }
   
  }
  term(a){
    this.termcondition=a;
    // alert(a)

  }
  onAlreadyRegistered(){
    this.navCtrl.pop();
  }






}