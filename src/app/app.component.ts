import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CriarContatoComponent } from './pages/criar-contato/criar-contato.component';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos.component';
import { ContatoService } from './services/contato.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ListaContatosComponent,
    CriarContatoComponent,
  ],
  providers: [ContatoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
