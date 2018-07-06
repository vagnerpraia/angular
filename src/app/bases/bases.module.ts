import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasesRoutingModule } from './bases-routing.module';
import { BasesComponent } from './containers/bases/bases.component';
import { PerfilComponent } from './containers/perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule,
    BasesRoutingModule
  ],
  declarations: [BasesComponent, PerfilComponent]
})
export class BasesModule { }
