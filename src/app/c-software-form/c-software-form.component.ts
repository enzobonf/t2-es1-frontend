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

  displayedColumns: string[] = ['nome', 'objetivo'];

  tecnologias: (TecnologiaSoftware & { selected: boolean })[] = [];
  analistas: Analista[] = [];

  public form: FormGroup = this.formBuilder.group({
    nome: [null, [Validators.required]],
    sigla: [null, [Validators.required]],
    versao_atual: this.formBuilder.group({
      versao: [null],
      id_analista: [null],
      data: [null],
      status: [null],
    }),
  });

  ngOnInit(): void {
    const {
      software,
    }: {
      software?: Software;
    } = this.data_dialog;

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

      //this.setSoftware();
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

  clickAddTecnologia() {}

  onSubmit() {}
}
