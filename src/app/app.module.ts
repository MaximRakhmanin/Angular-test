import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookService} from './book.service';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {CategoryService} from './category.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeroesComponent} from './heroes/heroes.component';
import {CrisisComponent} from './crisis/crisis.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BookDetailService} from './book-detail.service';
import { SearchComponent } from './search/search.component';
import {SearchService} from './search.service';
import {TestService} from './test.service';
import { IfDirective } from './if.directive';
import { ForDirective } from './for.directive';


const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: 'books', component: BooksComponent },
    { path: 'main', component: MainComponent},
    { path: 'main/heroes', component: HeroesComponent},
    { path: 'main/crisis', component: CrisisComponent},
    { path: 'books/:id', component: BookDetailComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    MainComponent,
      HeroesComponent,
      CrisisComponent,
      PageNotFoundComponent,
      SearchComponent,
      IfDirective,
      ForDirective,
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes, { enableTracing: false}),
  ],
  providers: [
      BookService,
      CategoryService,
      BookDetailService,
      SearchService,
      TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
