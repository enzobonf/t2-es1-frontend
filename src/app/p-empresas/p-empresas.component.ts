import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Empresa } from '../model/empresa.interface';
import { AppService } from '../services/app.service';
import * as moment from 'moment';
import { CEmpresaFormComponent } from '../c-empresa-form/c-empresa-form.component';
import { CDialogConfirmComponent } from '../c-dialog-confirm/c-dialog-confirm.component';

@Component({
  selector: 'app-p-empresas',
  templateUrl: './p-empresas.component.html',
  styleUrls: ['./p-empresas.component.scss'],
})
export class PEmpresasComponent implements OnInit {
  public filter: FormGroup = this.formBuilder.group({
    nome: [''],
  });

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private appService: AppService
  ) {}

  empresas: Empresa[] = [];
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
    this.getEmpresas();
    this.getAllStatus();
  }

  async getEmpresas() {
    try {
      const { empresas }: any = await this.apiService.getEmpresas();
      this.empresas = empresas;

      this.formatDataEmpresas();
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

  openDialogFormEmpresa(empresa?: Empresa) {
    const dialogRef = this.dialog.open(CEmpresaFormComponent, {
      disableClose: true,
      data: {
        empresa,
        all_status: this.all_status,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        if (empresa) {
          // TODO
        }
      }
    });
  }

  clickExcluir(empresa: Empresa) {
    const dialogRef = this.dialog.open(CDialogConfirmComponent, {
      width: '250px',
      autoFocus: false,
      data: {
        title: `Deseja excluir a empresa ${empresa.nome}?`,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO
      if (result)
        this.empresas = this.empresas.filter(x => x.id !== empresa.id);
    });
  }

  setLoading(loading: boolean) {
    this.appService.setLoading(loading);
  }
}
