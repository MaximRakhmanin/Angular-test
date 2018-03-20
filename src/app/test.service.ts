import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }

  setFile(image) {
    return this.http.post('http://BookStore/v1/images', image);
  }
}
