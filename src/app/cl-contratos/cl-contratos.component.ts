import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AppService } from '../services/app.service';
import * as moment from 'moment';
import { CContratoFormComponent } from '../c-contrato-form/c-contrato-form.component';
import { CDialogConfirmComponent } from '../c-dialog-confirm/c-dialog-confirm.component';
import { Contrato } from '../model/contrato.interface';

@Component({
  selector: 'cl-contratos',
  templateUrl: './cl-contratos.component.html',
  styleUrls: ['./cl-contratos.component.scss'],
})
export class ClContratosComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private appService: AppService
  ) {}

  @Input() showButtons = true;

  contratos: Contrato[] = [];
  //all_status: StatusVersao[] = [];

  loading = false;
  displayedColumns: string[] = [
    'nome_empresa',
    'numero',
    'data',
    'representante',
    'status',
    'editar',
    'excluir',
  ];

  ngOnInit() {
    this.getContratos();
  }

  async getContratos() {
    try {
      const { contratos }: any = await this.apiService.getContratos();
      this.contratos = contratos;
      this.formatDataSoftwares();
    } catch (err) {
      console.log(err);
    }
  }

  formatDataSoftwares() {
    let strFormat = 'DD/MM/YYYY';

    this.contratos.forEach(contrato => {
      contrato.data_formatted = moment(contrato.data_contratacao).format(
        strFormat
      );
    });
  }

  openDialogFormContrato(contrato?: Contrato) {
    const dialogRef = this.dialog.open(CContratoFormComponent, {
      disableClose: true,
      data: {
        contrato,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        if (contrato) {
          // TODO
        }
      }
    });
  }

  clickExcluir(contrato: Contrato) {
    const dialogRef = this.dialog.open(CDialogConfirmComponent, {
      width: '250px',
      autoFocus: false,
      data: {
        title: `Deseja excluir o contrato ${contrato.nro_contrato}?`,
        content: `Software: ${contrato.software.nome} | Empresa: ${contrato.empresa.nome}`,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO
      if (result)
        this.contratos = this.contratos.filter(
          x => x.nro_contrato !== contrato.nro_contrato
        );
    });
  }

  setLoading(loading: boolean) {
    this.appService.setLoading(loading);
  }
}
