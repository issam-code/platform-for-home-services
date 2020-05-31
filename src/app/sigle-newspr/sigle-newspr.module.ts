import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigleNewsprPageRoutingModule } from './sigle-newspr-routing.module';

import { SigleNewsprPage } from './sigle-newspr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigleNewsprPageRoutingModule
  ],
  declarations: [SigleNewsprPage]
})
export class SigleNewsprPageModule {}
