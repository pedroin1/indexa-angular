import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContatoComponent } from './components/contato/contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContatoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  alfabeto: string = `abcdefghijklmnopqrstuvwxyz`;
}
