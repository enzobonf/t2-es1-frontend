import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PHomeComponent } from './p-home/p-home.component';
import { PNavComponent } from './p-nav/p-nav.component';
import { PSoftwaresComponent } from './p-softwares/p-softwares.component';
import { MMaterialAngularModule } from './m-material-angular/m-material-angular/m-material-angular.module';
import { CSoftwareVersoesComponent } from './c-software-versoes/c-software-versoes.component';
import { CSoftwareTecnologiasComponent } from './c-software-tecnologias/c-software-tecnologias.component';
import { CSoftwareFormComponent } from './c-software-form/c-software-form.component';
import { CSelectItemComponent } from './c-select-item/c-select-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CAddItemComponent } from './c-add-item/c-add-item.component';
import { CDialogConfirmComponent } from './c-dialog-confirm/c-dialog-confirm.component';
import { CSoftwareVersoesFormComponent } from './c-software-versoes-form/c-software-versoes-form.component';
import { PEmpresasComponent } from './p-empresas/p-empresas.component';
import { CEmpresaFormComponent } from './c-empresa-form/c-empresa-form.component';
import { ClSoftwaresComponent } from './cl-softwares/cl-softwares.component';
import { ClEmpresasComponent } from './cl-empresas/cl-empresas.component';
import { ClContratosComponent } from './cl-contratos/cl-contratos.component';
import { PContratosComponent } from './p-contratos/p-contratos.component';
import { CContratoFormComponent } from './c-contrato-form/c-contrato-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PHomeComponent,
    PNavComponent,
    PSoftwaresComponent,
    CSoftwareVersoesComponent,
    CSoftwareTecnologiasComponent,
    CSoftwareFormComponent,
    CSelectItemComponent,
    CAddItemComponent,
    CDialogConfirmComponent,
    CSoftwareVersoesFormComponent,
    PEmpresasComponent,
    CEmpresaFormComponent,
    ClSoftwaresComponent,
    ClEmpresasComponent,
    ClContratosComponent,
    PContratosComponent,
    CContratoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MMaterialAngularModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
