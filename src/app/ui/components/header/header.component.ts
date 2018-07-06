import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public logo = 'assets/logo.svg';
  public title = 'Sepia';
  public items = [
    { label: 'Bases', url: '/bases' },
    { label: 'Sobre', url: '/sobre' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
