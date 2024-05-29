import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';
import { ContatoComponent } from '../../components/contato/contato.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../types/type';

@Component({
  selector: 'page-lista-contatos',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContatoComponent,
    FormsModule,
  ],
  providers: [ContatoService],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.scss',
})
export class ListaContatosComponent implements OnInit {
  alfabeto: string = `abcdefghijklmnopqrstuvwxyz`;
  filtroPorTexto: string = '';
  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) {}

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      // Compara os nomes sem acentuações
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    });
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter((contato) => {
      // Compara a letra inicial sem considerar acentuações
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .startsWith(this.removerAcentos(letra).toLowerCase());
    });
  }

  ngOnInit(): void {
    this.contatoService.getContatos().subscribe((dataResponse) => {
      this.contatos = dataResponse;
    });
  }
}
