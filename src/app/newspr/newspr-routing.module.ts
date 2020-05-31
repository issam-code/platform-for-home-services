import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsprPage } from './newspr.page';

const routes: Routes = [
  {
    path: '',
    component: NewsprPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsprPageRoutingModule {}
