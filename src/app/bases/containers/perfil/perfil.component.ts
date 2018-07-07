import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BasesService } from '../../services/bases.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public perfil = { id: null, nome: null };
  public base = { };

  constructor(private route: ActivatedRoute, private basesService: BasesService) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.perfil.id = res['perfilId']);

    this.basesService.getPerfil(this.route.snapshot.params['perfilId'])
      .subscribe((result: any) => this.base = result);
  }

}
