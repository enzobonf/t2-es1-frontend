import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CSoftwareVersoesComponent } from '../c-software-versoes/c-software-versoes.component';
import { ApiService } from '../services/api.service';
import { Software } from '../model/software.interface';
import { AppService } from '../services/app.service';
import * as moment from 'moment';
import { CSoftwareTecnologiasComponent } from '../c-software-tecnologias/c-software-tecnologias.component';
import { CSoftwareFormComponent } from '../c-software-form/c-software-form.component';

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
    'versao_atual',
    'verVersoes',
    'verTecnologias',
    'editar',
    'excluir',
  ];

  ngOnInit() {
    this.getSoftwares();
  }

  async getSoftwares() {
    try {
      const { softwares }: any = await this.apiService.getSoftwares();
      this.softwares = softwares;

      this.formatDataSoftwares();
    } catch (err) {
      console.log(err);
    }
  }

  formatDataSoftwares() {
    let strFormat = 'DD/MM/YYYY';

    this.softwares.forEach(software => {
      software.versao_atual.data_formatted = moment(
        software.versao_atual.data
      ).format(strFormat);

      software.versoes = software.versoes.map(versao => {
        return {
          ...versao,
          data_formatted: moment(versao.data).format(strFormat),
        };
      });
    });
  }

  openDialogFormSoftware(software?: Software) {
    const dialogRef = this.dialog.open(CSoftwareFormComponent, {
      disableClose: true,
      data: {
        software,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        if (software) {
          // TODO
        }
      }
    });
  }

  clickVerVersoes(software: Software) {
    this.dialog.open(CSoftwareVersoesComponent, {
      disableClose: false,
      autoFocus: false,
      data: {
        software,
      },
    });
  }

  clickVerTecnologias(software: Software) {
    this.dialog.open(CSoftwareTecnologiasComponent, {
      disableClose: false,
      autoFocus: false,
      data: {
        software,
      },
    });
  }

  setLoading(loading: boolean) {
    this.appService.setLoading(loading);
  }
}
