import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {ListenLibrary} from '../listen-library/listen-library';
import { Observable } from 'rxjs/Rx';

import { UserData } from "../../providers/user-data";
/**
 * Generated class for the MyLibrary page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-library',
  templateUrl: 'my-library.html',
  providers:[UserData]
})
export class MyLibrary {
   booklist
   language='eng';
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private userDataProvider:UserData,
   private loadingCtrl:LoadingController
   ) {
  }

  ngOnInit() {
    console.log('ionViewDidLoad MyLibrary');

  	let loading = this.loadingCtrl.create({content: 'Loading'});
            Observable.fromPromise(loading.present())
            .flatMap(data => Observable.forkJoin(this.userDataProvider.listOfMyLibraryBook()))
            .subscribe(data =>
              loading.dismiss().then(() =>{
              this.booklist=data[0];
              // this.booklist=this.booklist[0]
              // console.log(this.booklist[0])
              // console.log(JSON.stringify(this.booklist[0]))
              // this.Category=data[1]; 

              }),
               error =>
                    loading.dismiss().then(() => {alert('hello')}))
  }
  onBookClick(bookdata){
  	this.navCtrl.push(ListenLibrary,{bookdata:bookdata})
  }
  onRemove(bookdata){
  
  	let loading = this.loadingCtrl.create({content: 'Loading'});
            Observable.fromPromise(loading.present())
            .flatMap(data => Observable.forkJoin(this.userDataProvider.deleteOfMyLibraryBook(bookdata)))
            .subscribe(data =>
              loading.dismiss().then(() =>{
                this.booklist=this.booklist.filter(f => f.id !== bookdata.id);
              //this.booklist=data[0];
              // this.booklist=this.booklist[0]
              // console.log(this.booklist[0])
              // console.log(JSON.stringify(this.booklist[0]))
              // this.Category=data[1]; 

              }),
               error =>
                    loading.dismiss().then(() => {alert('hello')}))
  }
}
