import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CSoftwareVersoesComponent } from '../c-software-versoes/c-software-versoes.component';
import { ApiService } from '../api.service';

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
    private apiService: ApiService
  ) {}

  softwares: {
    nome: string;
    sigla: string;
    objetivo: string;
    versaoAtual: {
      data: string;
      versao: string;
    };
    versoes: {
      data: string;
      versao: string;
    }[];
  }[] = [];

  loading = false;
  displayedColumns: string[] = [
    'nome',
    'sigla',
    'versaoAtual',
    'verVersoes',
    'editar',
    'excluir',
  ];

  showCards = false;

  //pageEvent: PageEvent;

  records_per_page = 10;
  page = 0;
  number_of_pages = 0;
  number_of_records = 0;

  ngOnInit() {
    if (window.innerWidth > 1250) {
      this.showCards = false;
    } else {
      this.showCards = true;
    }
    this.getSoftwares();
  }

  async getSoftwares() {
    try {
      const softwares = await this.apiService.getSoftwares();
      this.softwares = softwares;
    } catch (err) {
      console.log(err);
    }
  }

  changeListCards() {
    this.showCards = !this.showCards;
  }

  clickVerVersoes(software: any) {
    this.dialog.open(CSoftwareVersoesComponent, {
      disableClose: false,
      data: {
        software,
      },
    });
  }
}
