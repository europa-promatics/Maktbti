import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {ENV} from '../app/env';


/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {

  constructor(public http: Http) {
    console.log('Hello UserData Provider');
  }
  listOfMyLibraryBook(): Observable<any> {
		 let body = {
		 	user_id:localStorage['user_id']
		 };
		let options = new RequestOptions({
		headers: new Headers({
		'Content-Type': 'application/json',
		})
	});
	return this.http.post(ENV.endPoint+'getLibraryBooks.json',JSON.stringify(body), options)
	.map(response => {
	return response.json();
	})
	.catch(error =>{
	return error;
	});
	}

 deleteOfMyLibraryBook(bookdata): Observable<any> {
		 let body = {
		 	book_id:bookdata.id,
		 	user_id:localStorage['user_id']
		 }
		let options = new RequestOptions({
		headers: new Headers({
		'Content-Type': 'application/json',
		})
	});
	return this.http.post(ENV.endPoint+'removeLibraryBooks.json',JSON.stringify(body), options)
	.map(response => {
	return response.json();
	})
	.catch(error =>{
	return error;
	});
	}

}
