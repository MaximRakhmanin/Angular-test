import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  messages = {
    name: 'sdfdsfsdf',
      mmm: 1221
  };
  constructor() { }

  ngOnInit() {
  }

}
