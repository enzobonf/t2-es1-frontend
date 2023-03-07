export interface Telefone {
  id: number;
  numero: string;
}

export interface Email {
  id: number;
  endereco: string;
}

export interface UsuarioChave {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  fones: Telefone[];
}

export interface Empresa {
  id: number;
  nome: string;
  cnpj: string;
  endereco: {
    tipo_logradouro: string;
    rua: string;
    numero: number;
    cidade: string;
    uf: string;
    pais: string;
    cep: string;
  };
  fones: Telefone[];
  emails: Email[];
  usuario_chave: UsuarioChave;
}
