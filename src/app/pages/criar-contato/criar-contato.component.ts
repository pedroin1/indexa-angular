import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'page-criar-contato',
  standalone: true,
  imports: [FormComponent, ContainerComponent],
  templateUrl: './criar-contato.component.html',
  styleUrl: './criar-contato.component.scss',
})
export class CriarContatoComponent {}
