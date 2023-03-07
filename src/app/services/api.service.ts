import { Injectable } from '@angular/core';
import { statusConfig } from '../config/status.config';
import {
  Analista,
  Software,
  TecnologiaSoftware,
} from '../model/software.interface';

const analistas: Analista[] = [
  {
    id: 1,
    nome: 'Lucas Oliveira',
    email: 'lucas.oliveira@example.com',
  },
  {
    id: 2,
    nome: 'Fernanda Santos',
    email: 'fernanda.santos@example.com',
  },
  {
    id: 3,
    nome: 'Mariana Silva',
    email: 'mariana.silva@example.com',
  },
  {
    id: 4,
    nome: 'João Santos',
    email: 'joao.santos@example.com',
  },
  {
    id: 5,
    nome: 'Pedro Oliveira',
    email: 'pedro.oliveira@example.com',
  },
];
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  async getSoftwares() {
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
              id: 3,
              nome: 'Wacom Intuos',
              objetivo: 'Tablet gráfico para desenho e pintura digital',
            },
            {
              id: 4,
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
          id: 3,
          nome: 'Google Chrome',
          sigla: 'GC',
          objetivo: 'Navegação na web',
          versao_atual: {
            data: '2021-11-23',
            versao: '96.0.4664.45',
            analista: analistas[1],
            status: statusConfig.disponivel,
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
          id: 4,
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

      resolve({ softwares });
    });
  }

  async getTecnologias() {
    return new Promise(resolve => {
      const tecnologias: TecnologiaSoftware[] = [
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
          id: 3,
          nome: 'Wacom Intuos',
          objetivo: 'Tablet gráfico para desenho e pintura digital',
        },
        {
          id: 4,
          nome: 'Affinity Photo',
          objetivo: 'Software alternativo de edição de imagens',
        },
        {
          id: 5,
          nome: 'Node.js',
          objetivo: 'Desenvolvimento de back-end com JavaScript',
        },
        {
          id: 6,
          nome: 'Angular',
          objetivo: 'Framework web poderoso e escalável',
        },
        {
          id: 7,
          nome: 'React',
          objetivo:
            'Biblioteca JavaScript para construção de interfaces de usuário interativas',
        },
        {
          id: 8,
          nome: 'Vue.js',
          objetivo:
            'Framework progressivo para construção de interfaces de usuário reativas e sofisticadas',
        },
      ];

      resolve({ tecnologias });
    });
  }

  async getAnalistas() {
    return new Promise(resolve => {
      resolve({ analistas });
    });
  }

  async getAllStatusDesenvolvimento() {
    return new Promise(resolve => {
      const status = Object.values(statusConfig);
      resolve({ status });
    });
  }

  async getEmpresas() {
    const empresas = [
      {
        id: 8,
        nome: 'Costa, Batista e Macedo',
        cnpj: '000000000',
        endereco: {
          tipo_logradouro: 'Rua',
          logradouro: 'Costa Avenida',
          numero: 4171,
          cidade: 'Costa do Norte',
          uf: 'ES',
          pais: 'Brasil',
          cep: '91123-227',
        },
        fones: [
          {
            id: 7,
            numero: '+55 (92) 4970-6295',
          },
          {
            id: 4,
            numero: '(78) 12155-1787',
          },
        ],
        emails: [
          {
            id: 4,
            endereco: 'Meire_Martins33@live.com',
          },
          {
            id: 6,
            endereco: 'Fabrcio.Costa4@live.com',
          },
        ],
        usuario_chave: {
          id: 4,
          nome: 'Benício Barros',
          cpf: '000.000.000-00',
          email: 'Mait.Saraiva94@live.com',
          fones: [
            {
              id: 8,
              numero: '(91) 89096-0559',
            },
            {
              id: 9,
              numero: '(61) 4479-2180',
            },
          ],
        },
      },
      {
        id: 1,
        nome: 'Saraiva LTDA',
        cnpj: '000000000',
        endereco: {
          tipo_logradouro: 'Rua',
          logradouro: 'Xavier Rodovia',
          numero: 8623,
          cidade: 'Xavier de Nossa Senhora',
          uf: 'MS',
          pais: 'Brasil',
          cep: '12353-712',
        },
        fones: [
          {
            id: 2,
            numero: '(45) 67013-5199',
          },
          {
            id: 9,
            numero: '(35) 57014-0005',
          },
        ],
        emails: [
          {
            id: 6,
            endereco: 'Rebeca_Moreira@live.com',
          },
          {
            id: 4,
            endereco: 'Clia_Saraiva@gmail.com',
          },
        ],
        usuario_chave: {
          id: 6,
          nome: 'Murilo Melo',
          cpf: '000.000.000-00',
          email: 'Roberta.Silva53@hotmail.com',
          fones: [
            {
              id: 1,
              numero: '(73) 3678-4934',
            },
            {
              id: 1,
              numero: '(26) 82894-5737',
            },
          ],
        },
      },
      {
        id: 6,
        nome: 'Batista, Xavier e Macedo',
        cnpj: '000000000',
        endereco: {
          tipo_logradouro: 'Rua',
          logradouro: 'Pedro Henrique Alameda',
          numero: 2171,
          cidade: 'undefined Gúbio do Norte',
          uf: 'BA',
          pais: 'Brasil',
          cep: '59135-800',
        },
        fones: [
          {
            id: 9,
            numero: '(01) 13583-5391',
          },
          {
            id: 9,
            numero: '(59) 7036-9740',
          },
        ],
        emails: [
          {
            id: 9,
            endereco: 'Pietro33@hotmail.com',
          },
          {
            id: 7,
            endereco: 'Marcela15@hotmail.com',
          },
        ],
        usuario_chave: {
          id: 2,
          nome: 'Bruna Pereira Neto',
          cpf: '000.000.000-00',
          email: 'Rafaela_Souza@bol.com.br',
          fones: [
            {
              id: 7,
              numero: '(82) 1823-4863',
            },
            {
              id: 6,
              numero: '(33) 0306-9878',
            },
          ],
        },
      },
      {
        id: 9,
        nome: 'Costa e Associados',
        cnpj: '000000000',
        endereco: {
          tipo_logradouro: 'Rua',
          logradouro: 'Kléber Marginal',
          numero: 5742,
          cidade: 'undefined Lorenzo de Nossa Senhora',
          uf: 'MG',
          pais: 'Brasil',
          cep: '89404-072',
        },
        fones: [
          {
            id: 5,
            numero: '+55 (17) 3974-1030',
          },
          {
            id: 5,
            numero: '+55 (75) 3813-5797',
          },
        ],
        emails: [
          {
            id: 6,
            endereco: 'Melissa.Xavier@live.com',
          },
          {
            id: 6,
            endereco: 'Daniel31@bol.com.br',
          },
        ],
        usuario_chave: {
          id: 2,
          nome: 'Dr. Alessandra Martins',
          cpf: '000.000.000-00',
          email: 'Gustavo69@hotmail.com',
          fones: [
            {
              id: 5,
              numero: '+55 (17) 2553-6840',
            },
            {
              id: 4,
              numero: '+55 (17) 1696-3461',
            },
          ],
        },
      },
    ];

    return new Promise((resolve, reject) => {
      resolve({ empresas });
    });
  }
}
