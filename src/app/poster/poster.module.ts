import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosterPageRoutingModule } from './poster-routing.module';

import { PosterPage } from './poster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosterPageRoutingModule
  ],
  declarations: [PosterPage]
})
export class PosterPageModule {}
