import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  @Input() id: string = ``;
  @Input() nome: string = '';
  @Input() telefone: string = '';

  cliquei() {
    console.log(this.id);
  }
}
