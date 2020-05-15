import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExemplePageRoutingModule } from './exemple-routing.module';

import { ExemplePage } from './exemple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExemplePageRoutingModule
  ],
  declarations: [ExemplePage]
})
export class ExemplePageModule {}
