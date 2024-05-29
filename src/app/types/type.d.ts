export interface Contato {
  id: string;
  nome: string;
  telefone: string;
}

export interface CriarContato {
  nome: string;
  telefone: string;
}

export interface ResponseCriarContatoApi {
  contato: string;
}
