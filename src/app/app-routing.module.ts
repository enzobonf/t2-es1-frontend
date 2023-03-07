import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PEmpresasComponent } from './p-empresas/p-empresas.component';
import { PHomeComponent } from './p-home/p-home.component';
import { PNavComponent } from './p-nav/p-nav.component';
import { PSoftwaresComponent } from './p-softwares/p-softwares.component';

const routes: Routes = [
  {
    path: '',
    component: PNavComponent,
    children: [
      {
        path: 'softwares',
        component: PSoftwaresComponent,
      },
      {
        path: 'empresas',
        component: PEmpresasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
