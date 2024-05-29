import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { CriarContato } from '../../types/type';
import { ContainerComponent } from '../container/container.component';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'form-criar-contato',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ContainerComponent,
    SeparatorComponent,
    ReactiveFormsModule,
  ],
  providers: [ContatoService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  //para saaber mais de Property Binding, Event Binding, TwoWayBinding
  //https://cursos.alura.com.br/course/angular-evoluindo-formularios-roteamento/task/150443

  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService) {}

  public salvarContato() {
    const contato: CriarContato = {
      nome: this.contatoForm.get('nome')?.value,
      telefone: this.contatoForm.get('telefone')?.value + '',
    };

    this.contatoService.salvarContato(contato).subscribe({
      next: () => this.contatoForm.reset(),
    });
  }

  public cancelar() {
    console.log('cancelei');
  }

  ngOnInit() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redeSocial: new FormControl(''),
      observacao: new FormControl(''),
    });
  }
}
