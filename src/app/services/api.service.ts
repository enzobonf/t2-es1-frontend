import { Injectable } from '@angular/core';
import { statusConfig } from '../config/status.config';
import { Analista, Software } from '../model/software.interface';

const analistas: Analista[] = [
  {
    nome: 'Lucas Oliveira',
    email: 'lucas.oliveira@example.com',
  },
  {
    nome: 'Fernanda Santos',
    email: 'fernanda.santos@example.com',
  },
  {
    nome: 'Mariana Silva',
    email: 'mariana.silva@example.com',
  },
  {
    nome: 'João Santos',
    email: 'joao.santos@example.com',
  },
  {
    nome: 'Pedro Oliveira',
    email: 'pedro.oliveira@example.com',
  },
];
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  async getSoftwares(): Promise<Software[]> {
    return new Promise(resolve => {
      const softwares: Software[] = [
        {
          id: 1,
          nome: 'Photoshop',
          sigla: 'PS',
          objetivo: 'Edição de imagens',
          versao_atual: {
            data: '2021-08-16',
            versao: '22.5.2',
            analista: analistas[0],
            status: statusConfig.desenvolvimento,
          },
          versoes: [
            {
              data: '2021-11-15',
              versao: '22.3.1',
              analista: analistas[3],
              status: statusConfig.disponivel,
            },
            {
              data: '2021-08-16',
              versao: '22.5.2',
              analista: analistas[0],
              status: statusConfig.desenvolvimento,
            },
            {
              data: '2021-06-02',
              versao: '22.4.3',
              analista: analistas[0],
              status: statusConfig.fora,
            },
          ],
          tecnologias: [
            {
              id: 1,
              nome: 'Adobe Lightroom',
              objetivo: 'Software de edição e organização de fotos',
            },
            {
              id: 2,
              nome: 'Adobe Creative Cloud',
              objetivo: 'Pacote de aplicativos de criação e design gráfico',
            },
            {
              nome: 'Wacom Intuos',
              objetivo: 'Tablet gráfico para desenho e pintura digital',
            },
            {
              nome: 'Affinity Photo',
              objetivo: 'Software alternativo de edição de imagens',
            },
          ],
        },
        {
          id: 2,
          nome: 'Microsoft Word',
          sigla: 'MSW',
          objetivo: 'Processamento de texto',
          versao_atual: {
            data: '2021-10-10',
            versao: '16.42',
            analista: analistas[2],
            status: statusConfig.desenvolvimento,
          },
          versoes: [
            {
              data: '2021-10-10',
              versao: '16.42',
              analista: analistas[2],
              status: statusConfig.desenvolvimento,
            },
            {
              data: '2021-07-22',
              versao: '16.39',
              analista: analistas[0],
              status: statusConfig.desenvolvimento,
            },
            {
              data: '2021-04-14',
              versao: '16.36',
              analista: analistas[0],
              status: statusConfig.desenvolvimento,
            },
          ],
          tecnologias: [],
        },
        {
          id: 2,
          nome: 'Google Chrome',
          sigla: 'GC',
          objetivo: 'Navegação na web',
          versao_atual: {
            data: '2021-11-23',
            versao: '96.0.4664.45',
            analista: analistas[1],
            status: statusConfig.desenvolvimento,
          },
          versoes: [
            {
              data: '2021-11-23',
              versao: '96.0.4664.45',
              analista: analistas[2],
              status: statusConfig.desenvolvimento,
            },
            {
              data: '2021-09-01',
              versao: '93.0.4577.63',
              analista: analistas[4],
              status: statusConfig.disponivel,
            },
            {
              data: '2021-06-28',
              versao: '91.0.4472.101',
              analista: analistas[4],
              status: statusConfig.fora,
            },
          ],
          tecnologias: [],
        },
        {
          id: 3,
          nome: 'Visual Studio Code',
          sigla: 'VSC',
          objetivo: 'Desenvolvimento de software',
          versao_atual: {
            data: '2021-11-15',
            versao: '1.61.2',
            analista: analistas[3],
            status: statusConfig.desenvolvimento,
          },
          versoes: [
            {
              data: '2021-11-15',
              versao: '1.61.2',
              analista: analistas[3],
              status: statusConfig.desenvolvimento,
            },
            {
              data: '2021-08-02',
              versao: '1.60.0',
              analista: analistas[3],
              status: statusConfig.disponivel,
            },
            {
              data: '2021-05-24',
              versao: '1.56.2',
              analista: analistas[4],
              status: statusConfig.fora,
            },
          ],
          tecnologias: [],
        },
      ];

      resolve(softwares);
    });
  }
}
