import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PHomeComponent } from './p-home/p-home.component';
import { PNavComponent } from './p-nav/p-nav.component';

const routes: Routes = [
  {
    path: '',
    component: PNavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
