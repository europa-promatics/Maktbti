import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {TranslateService} from '@ngx-translate/core';
import {ENV} from "./env";

import { MyLibrary } from '../pages/my-library/my-library';
import { ListenLibrary } from '../pages/listen-library/listen-library';
import { Category }  from '../pages/category/category';
import { Newlogin }  from '../pages/newlogin/newlogin';
import { MyAccount } from "../pages/my-account/my-account"
import { AllBooks } from "../pages/all-books/all-books"

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string,logo:string,component?: any}>;
  bottomline='';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private translateService: TranslateService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', logo:"img/home(2).png", component: Category},
      { title: 'My Account', logo:"img/avatar(1).png", component:MyAccount},
      { title:'My Library', logo:"img/open-book(1).png", component: MyLibrary},
      { title:'Recommended', logo:"img/favorites-button(1).png",},
      { title:'Browse All', logo:"img/magnifying-glass.png",component:AllBooks},
      { title:'Category', logo:"img/file.png",}
    ];
   

    // set status bar to white
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      if(localStorage['aut']=="login"){
         this.rootPage=Category ;
      }else{
       this.rootPage= HomePage;

      }
      this.translateService.setDefaultLang(ENV.language);
        this.translateService.use(ENV.language)
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#2ABFDB');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
