import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsprPageRoutingModule } from './newspr-routing.module';

import { NewsprPage } from './newspr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsprPageRoutingModule
  ],
  declarations: [NewsprPage]
})
export class NewsprPageModule {}
