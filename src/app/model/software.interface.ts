export interface TecnologiaSoftware {
  id?: number;
  nome: string;
  objetivo: string;
}

export interface Analista {
  id?: number;
  nome: string;
  email: string;
}

export interface StatusVersao {
  id?: number;
  nome: string;
}
export interface VersaoSofware {
  id?: number;
  data: string;
  data_formatted?: string;
  versao: string;
  analista: Analista;
  status: StatusVersao;
}
export interface Software {
  id: number;
  nome: string;
  sigla: string;
  objetivo: string;
  versao_atual: VersaoSofware;
  versoes?: VersaoSofware[];
  tecnologias?: TecnologiaSoftware[];
}
