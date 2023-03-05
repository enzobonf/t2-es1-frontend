import { Injectable } from '@angular/core';
import { Software } from './model/software.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  async getSoftwares(): Promise<Software[]> {
    return new Promise((resolve, reject) => {
      const softwares: Software[] = [
        {
          nome: 'Photoshop',
          sigla: 'PS',
          objetivo: 'Edição de imagens',
          versaoAtual: {
            data: '2021-08-16',
            versao: '22.5.2',
          },
          versoes: [
            {
              data: '2021-11-15',
              versao: '22.3.1',
            },
            {
              data: '2021-08-16',
              versao: '22.5.2',
            },
            {
              data: '2021-06-02',
              versao: '22.4.3',
            },
          ],
        },
        {
          nome: 'Microsoft Word',
          sigla: 'MSW',
          objetivo: 'Processamento de texto',
          versaoAtual: {
            data: '2021-10-10',
            versao: '16.42',
          },
          versoes: [
            {
              data: '2021-10-10',
              versao: '16.42',
            },
            {
              data: '2021-07-22',
              versao: '16.39',
            },
            {
              data: '2021-04-14',
              versao: '16.36',
            },
          ],
        },
        {
          nome: 'Google Chrome',
          sigla: 'GC',
          objetivo: 'Navegação na web',
          versaoAtual: {
            data: '2021-11-23',
            versao: '96.0.4664.45',
          },
          versoes: [
            {
              data: '2021-11-23',
              versao: '96.0.4664.45',
            },
            {
              data: '2021-09-01',
              versao: '93.0.4577.63',
            },
            {
              data: '2021-06-28',
              versao: '91.0.4472.101',
            },
          ],
        },
        {
          nome: 'Visual Studio Code',
          sigla: 'VSC',
          objetivo: 'Desenvolvimento de software',
          versaoAtual: {
            data: '2021-11-15',
            versao: '1.61.2',
          },
          versoes: [
            {
              data: '2021-11-15',
              versao: '1.61.2',
            },
            {
              data: '2021-08-02',
              versao: '1.60.0',
            },
            {
              data: '2021-05-24',
              versao: '1.56.2',
            },
          ],
        },
      ];

      resolve(softwares);
    });
  }
}
