import { Component, OnInit } from '@angular/core';
import { BookService} from '../book.service';
import { Book } from '../book';
import { CategoryService } from '../category.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    bookForm: FormGroup;
    title = new FormControl('', Validators.required);
    price = new FormControl('', Validators.required);
    date = new FormControl('', Validators.required);
    image = new FormControl();
    categories;
    book: Book = new Book();
    books;
    fileUpload;
    errors = [];
    success;
    sub = new Subject();
  constructor(private bookService: BookService, private catService: CategoryService, private fb: FormBuilder) {
  }
  ngOnInit() {
    this.getBook();
    this.getCategory();
    this.bookValidator();
      this.sub.subscribe(res => console.log(res));
  }
  bookValidator() {
      this.bookForm = this.fb.group({
          title: this.title,
          price: this.price,
          date: this.date,
          image: this.image
      });
      this.bookForm.valueChanges.
      filter(data => this.bookForm.valid).
      subscribe();
  }
  getBook() {
    this.bookService.getBook().subscribe(data => this.books = data);
  }
  delete(id) {
      this.bookService.delete(id).subscribe(response => {
        this.books = this.books.filter(item => item.id !== id);
      });
  }
  onChengeImage(event) {
      const file = event.target.files;
      this.fileUpload = file[0];
  }
  create() {
    this.bookService.create(this.book).subscribe(response => this.books.push(response),
        error => this.errors = error.error ,
        () => this.success = 'Books Added');
    setTimeout(() => { this.errors = undefined; this.success = undefined; }, 5000);
  }
  getCategory() {
    return this.catService.getCategory().subscribe(response => this.categories = response);
  }

}
