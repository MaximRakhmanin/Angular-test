import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BookDetailService} from '../book-detail.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
    book;
    constructor(private route: ActivatedRoute, private location: Location, private bookDetailService: BookDetailService) {
    }

    ngOnInit() {
        this.getBook();
    }

    getBook(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.bookDetailService.getBook(id).subscribe(res => this.book = res);
    }
    goBack() {
        this.location.back();
    }
}
