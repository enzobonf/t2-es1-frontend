import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  Analista,
  Software,
  StatusVersao,
  TecnologiaSoftware,
} from '../model/software.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-c-software-form',
  templateUrl: './c-software-form.component.html',
  styleUrls: ['./c-software-form.component.scss'],
})
export class CSoftwareFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<CSoftwareFormComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data_dialog: any
  ) {}

  software: Software = null;
  loading = false;
  isNew = true;

  all_status: StatusVersao[] = [];

  displayedColumns: string[] = ['nome', 'objetivo'];

  tecnologias: (TecnologiaSoftware & { selected: boolean })[] = [];
  analistas: Analista[] = [];

  public form: FormGroup = this.formBuilder.group({
    nome: [null, [Validators.required]],
    sigla: [null, [Validators.required]],
    versao_atual: this.formBuilder.group({
      versao: [null],
      data: [null],
      id_analista: [null],
      id_status: [null],
    }),
  });

  ngOnInit(): void {
    const {
      software,
      all_status,
    }: {
      software?: Software;
      all_status: StatusVersao[];
    } = this.data_dialog;

    this.all_status = all_status;

    if (software) {
      this.software = software;
      this.isNew = false;
    }

    this.getTecnologias();
    this.getAnalistas();
  }

  async getTecnologias() {
    try {
      const { tecnologias }: any = await this.apiService.getTecnologias();
      this.tecnologias = tecnologias.map(x => ({
        ...x,
        selected: false,
      }));

      if (this.software) {
        this.setSoftware();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getAnalistas() {
    try {
      const { analistas }: any = await this.apiService.getAnalistas();
      this.analistas = analistas;

      console.log(analistas);

      this.form.get('versao_atual.id_analista').setValue(analistas[0].id);

      //this.setSoftware();
    } catch (err) {
      console.log(err);
    }
  }

  setSoftware() {
    const idsTecnologiasSoftware = this.software.tecnologias.map(x => x.id);

    this.tecnologias = this.tecnologias.map(tecnologia => ({
      ...tecnologia,
      selected: idsTecnologiasSoftware.includes(tecnologia.id),
    }));
  }

  clickAddTecnologia() {}

  onSubmit() {
    this.close({});
  }

  close(data?: any) {
    this.dialogRef.close(data);
  }
}
