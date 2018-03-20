import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  valueSearch;
  searchResult;
  constructor( private searchService: SearchService, private router: Router) { }

  ngOnInit() {
  }
  getBooks() {
    this.searchService.getBooks(this.valueSearch).take(10)
        .subscribe(res => this.searchResult = res);
  }
  clickSearch(id, input) {
    this.router.navigate([`/books/${id}`]);
    this.searchResult = null;
    input.value = '';
  }
}
