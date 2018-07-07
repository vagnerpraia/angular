import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BasesService } from '../../services/bases.service';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit {
  public bases = [];

  constructor(private basesService: BasesService) { }

  ngOnInit() {
    this.basesService.getBases()
       .map(res => res['items'])
       .subscribe((result: any) => this.bases = result)
  }
}
