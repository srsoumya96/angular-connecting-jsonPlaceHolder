import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-custom-comp',
  templateUrl: './first-custom-comp.component.html',
  styleUrls: ['./first-custom-comp.component.css']
})
export class FirstCustomCompComponent implements OnInit {

  constructor() { }
  title="Angular App";
  ngOnInit() {
  }

}