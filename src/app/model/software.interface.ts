export interface VersaoSofware {
  data: string;
  dataFormatted?: string;
  versao: string;
}

export interface Software {
  nome: string;
  sigla: string;
  objetivo: string;
  versaoAtual: VersaoSofware;
  versoes: VersaoSofware[];
}
