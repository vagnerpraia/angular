import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit {
  public posts = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 10; i++) {
      this.posts.push({ id: i, text: 'This is post with id: ' + i });
    }
  }
}
