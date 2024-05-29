import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato, CriarContato, ResponseCriarContatoApi } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  constructor(private http: HttpClient) {}

  getContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`http://localhost:3333/listarContatos`);
  }

  salvarContato(
    novoContato: CriarContato
  ): Observable<ResponseCriarContatoApi> {
    return this.http.post<ResponseCriarContatoApi>(
      'http://localhost:3333/criarContato',
      novoContato
    );
  }
}
