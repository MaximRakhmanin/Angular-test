import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class BookService {
  httpOptions = {
    headers: new HttpHeaders ({
        'Authorization': 'Bearer BxJ11ay2hdakNAMi206Ryp6c9ZeCGRYp'
    })
    };

  constructor(private http: HttpClient) { }
  getBook(): Observable<any> {
    return this.http.get('http://BookStore/v1/books', this.httpOptions);
}
  delete(id) {
    return this.http.delete(`http://BookStore/v1/books/${id}`, this.httpOptions);
  }
    create(book) {
    return this.http.post('http://BookStore/v1/books', book);
  }

}
