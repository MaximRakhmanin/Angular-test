import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategory(): Observable<any> {
    return this.http.get('http://BookStore/v1/categories');
  }
}
