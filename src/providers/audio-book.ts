import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers,URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {ENV} from '../app/env';


/*
  Generated class for the AudioBook provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AudioBook {

  constructor(public http: Http) {
    console.log('Hello AudioBook Provider');
  }
categoryGet(): Observable<any> {
		// let body = JSON.stringify(Lo);
		let options = new RequestOptions({
		headers: new Headers({
		'Content-Type': 'application/json',
		})
	});
	return this.http.get(ENV.endPoint+'getCategories.json', options)
	.map(response => {
	return response.json();
	})
	.catch(error =>{
	return error;
	});
	}
catOfBookGet(parameter?:any): Observable<any> {
	let params: URLSearchParams = new URLSearchParams();
	if (parameter) {
	params.set('limit', '3');
		// code...
	}else{
	 params.set('limit', 'all');	
	}
	

		// let body = JSON.stringify(Lo);
		let options = new RequestOptions({
		headers: new Headers({
		'Content-Type': 'application/json',
		}),
		search:params
	});
	return this.http.get(ENV.endPoint+'getBooks.json', options)
	.map(response => {
	return response.json();
	})
	.catch(error =>{
	return error;
	});
	}
addToMyLibrary(bookdata): Observable<any> {
	 //alert(JSON.stringify(bookdata))
	 let body = JSON.stringify(bookdata);
		let options = new RequestOptions({
		headers: new Headers({
		'Content-Type': 'application/json',
		})
	});
	return this.http.post(ENV.endPoint+'myLibrary.json', body,options)
	.map(response => {
	return response.json();
	})
	.catch(error =>{
	 console.log(JSON.stringify(error))
	return error;
	});
	}
getSimilarBook(bookdata): Observable<any> {
	    let body = {
	    	category_id:bookdata.category_id,
	    	sub_category_id:bookdata.sub_category_id
	    };
		let options = new RequestOptions({
		headers: new Headers({
		'Content-Type': 'application/json',
		})
	});
	return this.http.post(ENV.endPoint+'similarBooks.json',JSON.stringify(body),options)
	.map(response => {
	return response.json();
	})
	.catch(error =>{

	return error;
	});
	}
// bookUnSubscribed(): Observable<any> {
// 		// let body = JSON.stringify(Lo);
// 		let options = new RequestOptions({
// 		headers: new Headers({
// 		'Content-Type': 'application/json',
// 		})
// 	});
// 	return this.http.get(ENV.endPoint+'getCategories.json', options)
// 	.map(response => {
// 	return response.json();
// 	})
// 	.catch(error =>{
// 	return error;
// 	});
// 	}
}
