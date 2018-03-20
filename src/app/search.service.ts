import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  getBooks(value) {
    if (value === '') {
     return Observable.from(['']);
    }
   return  this.http.get(`http://BookStore/v1/books?title=${value}`);
  }
}
