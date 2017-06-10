import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';

import { AudioBook } from "../../providers/audio-book";
import { Observable } from 'rxjs/Rx';

/**
 * Generated class for the ListenLibrary page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-listen-library',
  templateUrl: 'listen-library.html',
  providers:[AudioBook]
})
export class ListenLibrary {
segment;
bookdata;
bookStatus;
similarbook
language='eng';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private audiobbok:AudioBook,
    private loadingCtrl:LoadingController,
    private alert : AlertController) {
  	this.segment="listen";
    this.bookdata=this.navParams.get('bookdata')
   console.log(JSON.stringify(this.bookdata))
  }

  ngOnInit(){
   
    console.log('ionViewDidLoad ListenLibrary');
      let loading = this.loadingCtrl.create({content: 'Loading'});
            Observable.fromPromise(loading.present())
            // .flatMap(data => Observable.forkJoin(this.audiobbok.addToMyLibrary(bookdata),this.audiobbok.getSimilarBook()))
            .flatMap(data => Observable.forkJoin(this.audiobbok.getSimilarBook(this.bookdata)))
            .subscribe(data =>
              loading.dismiss().then(() =>{
              this.similarbook=data[0];
              //this.similarbook=data[1];
              // this.booklist=this.booklist[0]
              // console.log(this.booklist[0])
              // console.log(JSON.stringify(this.booklist[0]))
              // this.Category=data[1]; 

              }),
               error =>
                    loading.dismiss().then(() => {}))
  }
  onSubscribed(){

  }
  onAddLibrary(){
    let bookdata = {
        "book_id":this.bookdata.id,
        "user_id":localStorage['user_id']
    }
    //alert(JSON.stringify(bookdata))
     let loading = this.loadingCtrl.create({content: 'Loading'});
            Observable.fromPromise(loading.present())
            // .flatMap(data => Observable.forkJoin(this.audiobbok.addToMyLibrary(bookdata),this.audiobbok.getSimilarBook()))
            .flatMap(data => Observable.forkJoin(this.audiobbok.addToMyLibrary(bookdata)))
            .subscribe(data =>
              loading.dismiss().then(() =>{
              this.bookStatus=data[0];
              if(this.bookStatus.message=="Your have been subscribed."){
               this.alert.create({
                            title:"Success",
                            subTitle:"This book added to your library Succesfully",
                            buttons:[{
                              text:"ok",
                              handler:() => {
                              // this.navCtrl.setRoot(Category)
                              }
                            }]
                        }).present();
              }
              if(this.bookStatus.message=="Your have already subscribed."){
               this.alert.create({
                            title:"Alert",
                            subTitle:"Your have already subscribed.",
                            buttons:[{
                              text:"ok",
                              handler:() => {
                              // this.navCtrl.setRoot(Category)
                              }
                            }]
                        }).present();
              }

              //this.similarbook=data[1];
              // this.booklist=this.booklist[0]
              // console.log(this.booklist[0])
              // console.log(JSON.stringify(this.booklist[0]))
              // this.Category=data[1]; 

              }),
               error =>
                    loading.dismiss().then(() => {}))
    
  }

}
