import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CSoftwareVersoesComponent } from '../c-software-versoes/c-software-versoes.component';
import { ApiService } from '../services/api.service';
import { Software } from '../model/software.interface';
import { AppService } from '../services/app.service';
import * as moment from 'moment';

@Component({
  selector: 'app-p-softwares',
  templateUrl: './p-softwares.component.html',
  styleUrls: ['./p-softwares.component.scss'],
})
export class PSoftwaresComponent implements OnInit {
  public filter: FormGroup = this.formBuilder.group({
    nome: [''],
  });

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private appService: AppService
  ) {}

  softwares: Software[] = [];

  loading = false;
  displayedColumns: string[] = [
    'nome',
    'sigla',
    'versaoAtual',
    'verVersoes',
    'editar',
    'excluir',
  ];

  ngOnInit() {
    this.getSoftwares();
  }

  async getSoftwares() {
    try {
      const softwares = await this.apiService.getSoftwares();
      this.softwares = softwares;

      this.formatDataSoftwares();
    } catch (err) {
      console.log(err);
    }
  }

  formatDataSoftwares() {
    let strFormat = 'DD/MM/YYYY';

    this.softwares.forEach(software => {
      software.versaoAtual.dataFormatted = moment(
        software.versaoAtual.data
      ).format(strFormat);

      software.versoes = software.versoes.map(versao => {
        return {
          ...versao,
          dataFormatted: moment(versao.data).format(strFormat),
        };
      });
    });
  }

  clickVerVersoes(software: Software) {
    this.dialog.open(CSoftwareVersoesComponent, {
      disableClose: false,
      data: {
        software,
      },
    });
  }

  setLoading(loading: boolean) {
    this.appService.setLoading(loading);
  }
}
