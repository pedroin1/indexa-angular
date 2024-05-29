import { Routes } from '@angular/router';
import { CriarContatoComponent } from './pages/criar-contato/criar-contato.component';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos.component';

export const routes: Routes = [
  {
    path: '',
    component: ListaContatosComponent,
  },
  {
    path: 'criar',
    component: CriarContatoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
