import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import {ListenLibrary} from '../listen-library/listen-library';
import { AudioBook } from "../../providers/audio-book"

/**
 * Generated class for the Category page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
  providers:[AudioBook]
})
export class Category {
segment;
Category:any;
language:any;
booklist:any;
allBooklist:any
  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingCtrl:LoadingController,private audiobbok:AudioBook) {
  	this.segment="featured"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category');
  }

ngOnInit(){
  this.language='eng';
    let loading = this.loadingCtrl.create({content: 'Loading'});
            Observable.fromPromise(loading.present())
            .flatMap(data => Observable.forkJoin(this.audiobbok.catOfBookGet(20),this.audiobbok.catOfBookGet(),this.audiobbok.categoryGet()))
            .subscribe(data =>
              loading.dismiss().then(() =>{
              this.booklist=data[0];
              this.allBooklist=data[1];
              // this.booklist=this.booklist[0]
              // console.log(this.booklist[0])
              // console.log(JSON.stringify(this.booklist[0]))
              this.Category=data[2]; 

              }),
               error =>
                    loading.dismiss().then(() => {}))

}
onBook(bookdata){
 this.navCtrl.push(ListenLibrary,{bookdata:bookdata})
}


}
