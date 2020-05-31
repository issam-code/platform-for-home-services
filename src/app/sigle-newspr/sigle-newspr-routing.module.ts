import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigleNewsprPage } from './sigle-newspr.page';

const routes: Routes = [
  {
    path: '',
    component: SigleNewsprPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigleNewsprPageRoutingModule {}
