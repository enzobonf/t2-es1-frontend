import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-p-softwares',
  templateUrl: './p-softwares.component.html',
  styleUrls: ['./p-softwares.component.scss'],
})
export class PSoftwaresComponent implements OnInit {
  public filter: FormGroup = this.formBuilder.group({
    nome: [''],
  });

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {}

  softwares: {
    nome: string;
    sigla: string;
    objetivo: string;
    versaoAtual: {
      data: string;
      versao: string;
    };
  }[] = [
    {
      nome: 'Teste',
      sigla: 'TT',
      objetivo: 'Testar',
      versaoAtual: {
        data: '2023-03-01',
        versao: '1.0',
      },
    },
  ];

  loading = false;
  displayedColumns: string[] = ['nome', 'sigla', 'editar', 'excluir'];
  idIntegradoraSelected = -1;
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
    //this.getIntegradoras();
  }
}
