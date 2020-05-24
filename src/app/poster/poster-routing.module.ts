import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosterPage } from './poster.page';

const routes: Routes = [
  {
    path: '',
    component: PosterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosterPageRoutingModule {}
