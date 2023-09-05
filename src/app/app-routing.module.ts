import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { AdicionarServicoComponent } from './core/pages/adicionar-servico/adicionar-servico.component';
import { PerfilComponent } from './core/pages/perfil/perfil.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'Adicionar-Serviço',
    component: AdicionarServicoComponent
  },
  {
    path: 'Perfil',
    component: PerfilComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
