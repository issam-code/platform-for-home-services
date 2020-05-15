import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExemplePage } from './exemple.page';

const routes: Routes = [
  {
    path: '',
    component: ExemplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemplePageRoutingModule {}
