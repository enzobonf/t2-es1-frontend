export interface VersaoSofware {
    data: string;
    data_str?: string;
    versao: string;
}

export interface Software {
    nome: string;
    sigla: string;
    objetivo: string;
    versaoAtual: VersaoSofware;
    versoes: VersaoSofware[];
}
