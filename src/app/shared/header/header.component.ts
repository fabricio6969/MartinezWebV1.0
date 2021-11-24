import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Carga() {
    window.scroll({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
  }

}
