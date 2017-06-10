import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { MyLibrary } from '../pages/my-library/my-library';
import { ListenLibrary } from '../pages/listen-library/listen-library';
import { Newlogin }  from '../pages/newlogin/newlogin';
import { Forgetpasword }  from '../pages/forgetpasword/forgetpasword';
import { Thanks }  from '../pages/thanks/thanks';
import { Category }  from '../pages/category/category';
import { Signup } from '../pages/signup/signup';
import { MyAccount } from '../pages/my-account/my-account';
import { FeedBack } from '../pages/feed-back/feed-back';
import { SubscriptionPlans } from '../pages/subscription-plans/subscription-plans';
import { ListeningTime } from '../pages/listening-time/listening-time';
import { PaymentHistory } from '../pages/payment-history/payment-history';


import {SignUp} from '../providers/sign-up'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

@NgModule({
  declarations: [
  MyApp,
    HomePage, 
    Signup,
    MyLibrary,
    ListenLibrary,
    Newlogin,
    Forgetpasword,
    Thanks,
    Category,
    FeedBack,
    MyAccount,
    SubscriptionPlans,
    ListeningTime,
    PaymentHistory
  ],
  imports: [
   BrowserModule,
    HttpModule ,
    IonicModule.forRoot(MyApp),
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyAccount,
    HomePage,
    Signup,
    MyLibrary,
    ListenLibrary,
    Newlogin,
    FeedBack,
    Forgetpasword,
    Thanks,
    Category,
    SubscriptionPlans,
    ListeningTime,
    PaymentHistory
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     SignUp
  ]
})
export class AppModule {}
