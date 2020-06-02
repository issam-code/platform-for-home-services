import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhmPage } from './phm.page';

const routes: Routes = [
  {
    path: '',
    component: PhmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhmPageRoutingModule {}
