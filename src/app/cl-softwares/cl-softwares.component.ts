import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CSoftwareVersoesComponent } from '../c-software-versoes/c-software-versoes.component';
import { ApiService } from '../services/api.service';
import { Software, StatusVersao } from '../model/software.interface';
import { AppService } from '../services/app.service';
import * as moment from 'moment';
import { CSoftwareTecnologiasComponent } from '../c-software-tecnologias/c-software-tecnologias.component';
import { CSoftwareFormComponent } from '../c-software-form/c-software-form.component';
import { CDialogConfirmComponent } from '../c-dialog-confirm/c-dialog-confirm.component';

@Component({
  selector: 'cl-softwares',
  templateUrl: './cl-softwares.component.html',
  styleUrls: ['./cl-softwares.component.scss'],
})
export class ClSoftwaresComponent implements OnInit {
  public filter: FormGroup = this.formBuilder.group({
    nome: [''],
  });

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private appService: AppService
  ) {}

  @Input() showButtons = true;

  softwares: Software[] = [];
  all_status: StatusVersao[] = [];

  loading = false;
  displayedColumns: string[] = [
    'nome',
    'sigla',
    'versao_atual',
    'editarStatus',
    'verVersoes',
    'verTecnologias',
    'editar',
    'excluir',
  ];

  ngOnInit() {
    this.getSoftwares();
    this.getAllStatus();
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

  async getAllStatus() {
    try {
      const { status }: any =
        await this.apiService.getAllStatusDesenvolvimento();
      this.all_status = status;
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
        all_status: this.all_status,
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

  clickExcluir(software: Software) {
    const dialogRef = this.dialog.open(CDialogConfirmComponent, {
      width: '250px',
      autoFocus: false,
      data: {
        title: `Deseja excluir o software ${software.nome}?`,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO
      if (result)
        this.softwares = this.softwares.filter(x => x.id !== software.id);
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
