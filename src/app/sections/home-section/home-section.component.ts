import { Component, OnInit } from '@angular/core';

interface SelectProtected {
  readonly wrapperElement: HTMLDivElement;
  readonly inputElement: HTMLInputElement;
}

const selectProtected: SelectProtected = {
  wrapperElement: document.createElement("div"),
  inputElement: document.createElement("input")
};

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.less']
})
export class HomeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
