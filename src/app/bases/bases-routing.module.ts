import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasesComponent } from './containers/bases/bases.component';
import { PerfilComponent } from './containers/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: BasesComponent },
  { path: ':perfilId', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasesRoutingModule { }
