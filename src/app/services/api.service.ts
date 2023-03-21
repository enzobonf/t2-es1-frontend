import { Injectable } from '@angular/core';
import { statusConfig } from '../config/status.config';
import { Chamado } from '../model/chamado.interface';
import { Contrato } from '../model/contrato.interface';
import { Empresa } from '../model/empresa.interface';
import {
  Analista,
  Software,
  TecnologiaSoftware,
} from '../model/software.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom, take } from 'rxjs';

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
  private api = environment.API_URL;
  constructor(private http: HttpClient) {}

  async getSoftwares() {
    return firstValueFrom(
      this.http.get<any>(this.api + '/softwares').pipe(take(1))
    );
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
    const empresas: Empresa[] = [
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
          cidade: 'Gúbio do Norte',
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
          cidade: 'Lorenzo de Nossa Senhora',
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

  async getContratos() {
    let contratos: Contrato[] = [
      {
        nro_contrato: 63264,
        empresa: {
          id: 1,
          nome: 'Saraiva LTDA',
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
        data_contratacao: '2023-03-07T04:41:57.183Z',
        software: {
          id: 1,
          nome: 'Photoshop',
          sigla: 'PS',
          versao: {
            data: '2021-08-16',
            versao: '22.5.2',
            analista: {
              id: 1,
              nome: 'Lucas Oliveira',
              email: 'lucas.oliveira@example.com',
            },
            status: {
              id: 2,
              nome: 'Em desenvolvimento',
            },
          },
        },
        status: {
          id: 1,
          nome: 'Não vigente',
        },
      },
      {
        nro_contrato: 23050,
        empresa: {
          id: 8,
          nome: 'Costa, Batista e Macedo',
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
        data_contratacao: '2023-03-07T03:29:15.852Z',
        software: {
          id: 1,
          nome: 'Photoshop',
          sigla: 'PS',
          versao: {
            data: '2021-08-16',
            versao: '22.5.2',
            analista: {
              id: 1,
              nome: 'Lucas Oliveira',
              email: 'lucas.oliveira@example.com',
            },
            status: {
              id: 2,
              nome: 'Em desenvolvimento',
            },
          },
        },
        status: {
          id: 1,
          nome: 'Não vigente',
        },
      },
      {
        nro_contrato: 77120,
        empresa: {
          id: 6,
          nome: 'Batista, Xavier e Macedo',
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
        data_contratacao: '2023-03-07T15:56:09.970Z',
        software: {
          id: 2,
          nome: 'Microsoft Word',
          sigla: 'MSW',
          versao: {
            data: '2021-10-10',
            versao: '16.42',
            analista: {
              id: 3,
              nome: 'Mariana Silva',
              email: 'mariana.silva@example.com',
            },
            status: {
              id: 2,
              nome: 'Em desenvolvimento',
            },
          },
        },
        status: {
          id: 1,
          nome: 'Ativo',
        },
      },
      {
        nro_contrato: 95419,
        empresa: {
          id: 9,
          nome: 'Costa e Associados',
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
        data_contratacao: '2023-03-08T02:02:57.203Z',
        software: {
          id: 3,
          nome: 'Google Chrome',
          sigla: 'GC',
          versao: {
            data: '2021-11-23',
            versao: '96.0.4664.45',
            analista: {
              id: 2,
              nome: 'Fernanda Santos',
              email: 'fernanda.santos@example.com',
            },
            status: {
              id: 1,
              nome: 'Disponível',
            },
          },
        },
        status: {
          id: 1,
          nome: 'Em contratação',
        },
      },
    ];

    return new Promise((resolve, reject) => {
      resolve({ contratos });
    });
  }

  async getChamados() {
    const chamados: Chamado[] = [
      {
        nro_ticket: 9627,
        data_abertura: '2023-03-07T13:03:53.873Z',
        empresa: {
          id: 8,
          nome: 'Costa, Batista e Macedo',
        },
        software: {
          id: 1,
          nome: 'Photoshop',
          sigla: 'PS',
          versao: {
            data: '2021-08-16',
            versao: '22.5.2',
            analista: {
              id: 1,
              nome: 'Lucas Oliveira',
              email: 'lucas.oliveira@example.com',
            },
            status: {
              id: 2,
              nome: 'Em desenvolvimento',
            },
          },
        },
        descricao: 'Placeat nihil deserunt modi sunt quo placeat deleniti.',
        tipo_manutencao: {
          id: 1,
          nome: 'Erro',
        },
        status: {
          id: 2,
          nome: 'Realizado',
        },
      },
      {
        nro_ticket: 9668,
        data_abertura: '2023-03-08T01:23:34.248Z',
        empresa: {
          id: 1,
          nome: 'Saraiva LTDA',
        },
        software: {
          id: 1,
          nome: 'Photoshop',
          sigla: 'PS',
          versao: {
            data: '2021-08-16',
            versao: '22.5.2',
            analista: {
              id: 1,
              nome: 'Lucas Oliveira',
              email: 'lucas.oliveira@example.com',
            },
            status: {
              id: 2,
              nome: 'Em desenvolvimento',
            },
          },
        },
        descricao: 'Laudantium qui pariatur.',
        tipo_manutencao: {
          id: 1,
          nome: 'Erro',
        },
        status: {
          id: 3,
          nome: 'Cancelado',
        },
      },
      {
        nro_ticket: 7154,
        data_abertura: '2023-03-07T08:37:13.755Z',
        empresa: {
          id: 6,
          nome: 'Batista, Xavier e Macedo',
        },
        software: {
          id: 2,
          nome: 'Microsoft Word',
          sigla: 'MSW',
          versao: {
            data: '2021-10-10',
            versao: '16.42',
            analista: {
              id: 3,
              nome: 'Mariana Silva',
              email: 'mariana.silva@example.com',
            },
            status: {
              id: 2,
              nome: 'Em desenvolvimento',
            },
          },
        },
        descricao: 'Possimus pariatur iure a sunt.',
        tipo_manutencao: {
          id: 2,
          nome: 'Evolução de Funcionalidade',
        },
        status: {
          id: 1,
          nome: 'Em desenvolvimento',
        },
      },
      {
        nro_ticket: 8470,
        data_abertura: '2023-03-07T05:53:43.866Z',
        empresa: {
          id: 9,
          nome: 'Costa e Associados',
        },
        software: {
          id: 3,
          nome: 'Google Chrome',
          sigla: 'GC',
          versao: {
            data: '2021-11-23',
            versao: '96.0.4664.45',
            analista: {
              id: 2,
              nome: 'Fernanda Santos',
              email: 'fernanda.santos@example.com',
            },
            status: {
              id: 1,
              nome: 'Disponível',
            },
          },
        },
        descricao: 'Sit eum ipsum veniam iste.',
        tipo_manutencao: {
          id: 1,
          nome: 'Erro',
        },
        status: {
          id: 3,
          nome: 'Cancelado',
        },
      },
    ];

    return new Promise((resolve, reject) => {
      resolve({ chamados });
    });
  }
}
