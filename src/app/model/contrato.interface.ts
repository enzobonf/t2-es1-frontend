import { Empresa, UsuarioChave } from './empresa.interface';
import { Software } from './software.interface';

export interface StatusContrato {
  id: string;
  nome: string;
}
export interface Contrato {
  nro_contrato: number;
  empresa: {
    id: number;
    nome: string;
    usuario_chave: UsuarioChave;
  };
  data_contratacao: string;
  data_formatted?: string;
  software: {
    id: number;
    nome: string;
    sigla: string;
  };
  status: StatusContrato;
}
